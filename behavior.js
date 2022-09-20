document.addEventListener("DOMContentLoaded", function(event) {
    const thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener('click', () => {
        thumbnailElement.classList.toggle('small')
    })

    const thumbnailElement2 = document.getElementById("smart_thumbnail#2");
    thumbnailElement2.addEventListener('click', () => {
        thumbnailElement2.classList.toggle('small')
    })

    const thumbnailElement3 = document.getElementById("smart_thumbnail#3");
    thumbnailElement3.addEventListener('click', () => {
        thumbnailElement3.classList.toggle('small')
    })

    const thumbnailElement4 = document.getElementById("smart_thumbnail#4");
    thumbnailElement4.addEventListener('click', () => {
        thumbnailElement4.classList.toggle('small')
    })
    })