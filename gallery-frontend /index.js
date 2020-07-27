document.addEventListener('DOMContentLoaded', (e) => {
    const picturesUrl = 'http://localhost:3000/api/v1/pictures';
    const pictureCollection = document.getElementById('picture-collection')

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
        const pictureLike = document.createElement('p')

        pictureTitle.innerHTML = picture.title
        pictureImage.src = picture.imageUrl
        pictureLike.innerHTML = picture.like
        pictureCard.append(pictureTitle, pictureImage, pictureLike)
        pictureCollection.append(pictureCard)
    }



    getAllPictures()
})