
document.addEventListener('DOMContentLoaded', (e) => {
    const picturesUrl = 'http://localhost:3000/api/v1/pictures/';
    const commentsUrl = 'http://localhost:3000/api/v1/comments/';
    const pictureCollection = document.getElementById('picture-collection')
    let pictureRow = document.querySelector('.row') 

    const handleSwitchingTabs = (pictures) => {
        let homeTab = document.querySelector('#home');
        let favoritesTab = document.querySelector('#favorites');
        
        homeTab.addEventListener('click', (e) => {
            let isHomeActive = homeTab.classList.contains('active');    
            if (!isHomeActive) {
                homeTab.classList.add('active');
                favoritesTab.classList.remove('active');
                const row = document.querySelector('.row');
                row.innerHTML = "";
                pictures.forEach(picture => {
                    renderPictures(picture)
                })

            }
        })

        favoritesTab.addEventListener('click', (e) => {
            let isFavoritesActive = favoritesTab.classList.contains('active');
            if (!isFavoritesActive) {
                favoritesTab.classList.add('active');
                homeTab.classList.remove('active');
                const row = document.querySelector('.row');
                row.innerHTML = "";
                pictures.forEach(picture => {
                    if (picture.favorite) {
                        renderPictures(picture, true)
                    }
                })
            }
        })
    }

    const getAllPictures = () => {
        fetch(picturesUrl)
        .then(response => response.json())
        .then(pictures => loadPictures(pictures))
    }
    const loadPictures = (pictures) => {
        pictures.forEach(picture => renderPictures(picture))
        handleSwitchingTabs(pictures)
    }

    const renderPictures = (picture, isFavoritesTab = false) => {
        const pictureCard = document.createElement('div')
        pictureCard.className = 'picture-card'
        const pictureTitle = document.createElement('h4')
        pictureTitle.className = 'picture-title'
        const pictureImage = document.createElement('img')
        pictureImage.className = 'picture-image'
        const pictureLike = document.createElement('span')
        
        const likeButton = document.createElement('button')
        likeButton.className = 'like'
        likeButton.innerHTML = `&#x2665;`

        const favoriteButton = document.createElement('button')
        favoriteButton.className = 'favorite'
        if (isFavoritesTab) {
            favoriteButton.innerText = 'Remove Favorite'
            favoriteButton.className = 'remove-favorite'
        } else {
            favoriteButton.disabled = picture.favorite;
            favoriteButton.innerText = 'Add Favorite'
            favoriteButton.className = 'favorite'
        }

        const showCommentsButton = document.createElement('button');
        showCommentsButton.className = 'showComments';
        showCommentsButton.innerText = 'show comments'
        
        pictureTitle.innerHTML = picture.title
        pictureImage.src = picture.imageUrl
        pictureLike.innerText = `${picture.like} Likes`
       
        pictureCard.append(pictureTitle, pictureImage, pictureLike, likeButton, favoriteButton, showCommentsButton)

        pictureRow.append(pictureCard)

        likeButtonHandler(picture, likeButton)
        favoriteButtonHandler(picture, favoriteButton, isFavoritesTab)
        showCommentsHandler(picture, showCommentsButton, pictureCard)
    }

    const addCommentToCommentCard = (comment, commentCard) => {
        const commentItem = document.createElement('div');
        commentItem.className = 'commentItem';
        const commentDeleteButton = document.createElement('button');
        commentDeleteButton.innerText = 'Delete Comment'
        commentDeleteButton.className = "deleteCommentButton";
        commentItem.dataset.id = comment.id; 
        const commentUser = document.createElement('span');
        commentUser.className = 'commentUser';
        commentUser.innerText = 'Anonymous: ';
        const commentSpan = document.createElement('span');
        commentSpan.innerText = comment.body;
        commentSpan.append(document.createElement('br'));
        commentItem.append(commentUser);
        commentItem.append(commentSpan);
        commentCard.append(commentItem);
        commentItem.append(commentDeleteButton);

        deleteCommentHandler(commentDeleteButton, comment, commentItem);
    }

    const deleteCommentHandler = (commentDeleteButton, comment, commentItem) => {
        commentDeleteButton.addEventListener('click', e => {
            postDeleteComment(comment)
            removeCommentFromCommentItem(commentItem)
        });
    }

    const removeCommentFromCommentItem = (commentItem) => {
        commentItem.innerHTML = '';
        commentItem.className = '';
    }

    const postDeleteComment = (comment) => {
        return fetch(commentsUrl + comment.id, {
            method: 'DELETE'
        })
    }

    const displayComments = (comments, pictureCard, commentCard) => {

        comments.forEach(comment => {
            addCommentToCommentCard(comment, commentCard);
        });
        pictureCard.append(commentCard);
    }

    const createComment = (picture, commentCard) => {
        const commentContainer = document.createElement('div');
        commentContainer.className = 'commentContainer';
        const textField = document.createElement('input');
        textField.className = 'commentTextField';
        const span = document.createElement('span');
        span.className = 'commentHeader';
        
        span.innerText = 'Create a Comment:'
        textField.type = 'text';
        commentContainer.append(span);
        commentContainer.append(textField);
        commentCard.append(commentContainer);

        textField.addEventListener('keypress', (e) => {
            let commentBody = textField.value;
            if (e.key === 'Enter' && commentBody !== '') {
                postComment(commentBody, picture)
                .then(commentResponse => {
                    return commentResponse.json();
                })
                .then(commentResponse => addCommentToCommentCard({ body: commentResponse.body, id: commentResponse.id }, commentCard));
                textField.value = '';
            }
        });
    }

    const postComment = (commentBody, picture) => {
        return fetch(commentsUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ comment: { body: commentBody, picture_id: picture.id } })
        })
    }

    const showCommentsHandler = (picture, showCommentsButton, pictureCard) => {
        const comments = picture.comments;
        const commentCard = document.createElement('div');
        commentCard.className = 'commentCard';
        showCommentsButton.addEventListener('click', (e) => {
            if (showCommentsButton.innerText === 'show comments') {
                showCommentsButton.innerText = 'hide comments'; 
                commentCard.className = 'commentCard';
                createComment(picture, commentCard)
                displayComments(comments, pictureCard, commentCard)
            } else if ((showCommentsButton.innerText === 'hide comments')) {
                showCommentsButton.innerText = 'show comments'; 
                commentCard.innerHTML = '';
                commentCard.className = '';
            }
        })
    }

    const likeButtonHandler = (picture, likeButton) => {
        likeButton.addEventListener('click', (e) => {
            const likeCount = likeButton.previousElementSibling
            const newLike = picture.like += 1 
            likeCount.innerText = `${newLike} Likes`
            addLike(newLike, picture)
        })
    }
    const addLike = (newLike, picture) => {
        fetch(picturesUrl + picture.id, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ picture: { like: newLike }})
        })
    }

    const favoriteButtonHandler = (picture, favoriteButton, isFavoritesTab) => {
        favoriteButton.addEventListener('click', (e) => {
            if (isFavoritesTab) {
                favoriteButton.disabled = true;
                picture.favorite = false;
                addFavorite(false, picture);
            } else {
                favoriteButton.disabled = true;
                picture.favorite = true;
                addFavorite(true, picture);
            }
        })
    }

    const addFavorite = (isFavorited, picture) => {
        fetch(picturesUrl + picture.id, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ picture: { favorite: isFavorited } })
        })
    }
    
    getAllPictures()
    // handleSwitchingTabs()
})