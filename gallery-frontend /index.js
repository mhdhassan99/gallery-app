document.addEventListener('DOMContentLoaded', (e) => {
    const picturesUrl = 'http://localhost:3000/api/v1/pictures/';
    const pictureCollection = document.getElementById('picture-collection')
    let pictureRow = document.querySelector('.row') 

    const getAllPictures = () => {
        fetch(picturesUrl)
        .then(response => response.json())
        .then(pictures => loadPictures(pictures))
    }
    const loadPictures = (pictures) => {
        pictures.forEach(picture => renderPictures(picture))
    }

    const renderPictures = (picture) => {
        const pictureCard = document.createElement('div')
        pictureCard.className = 'picture-card'
        
        const pictureTitle = document.createElement('h4')
        const pictureImage = document.createElement('img')
        pictureImage.className = 'picture-image'
        const pictureLike = document.createElement('span')
        const likeButton = document.createElement('button')
        likeButton.className = 'like'
        likeButton.innerText = 'like'
        const favoriteButton = document.createElement('button')
        favoriteButton.className = 'favorite'
        favoriteButton.innerText = 'Add Favorite'
       
        pictureTitle.innerHTML = picture.title
        pictureImage.src = picture.imageUrl
        pictureLike.innerText = `${picture.like} Likes`
       
        pictureCard.append(pictureTitle, pictureImage, pictureLike, likeButton, favoriteButton)

        pictureRow.append(pictureCard)

        likeButtonHandler(picture, likeButton)
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
            body: JSON.stringify({ like: newLike })
        })
    }
    
    getAllPictures()
})