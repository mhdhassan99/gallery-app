document.addEventListener('DOMContentLoaded', (e) => {
    const picturesUrl = 'http://localhost:3000/api/v1/pictures';

    const getAllPictures = () => {
        fetch(picturesUrl)
        .then(response => response.json())
        .then(pictures => console.log(pictures))
    }
    
    getAllPictures()
})