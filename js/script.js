const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


var mainImage = document.getElementById('main-image')
var smallImage = document.getElementsByClassName('small-img')

smallImage[0].onclick = function () {
    mainImage.src = smallImage[0].src
}
smallImage[1].onclick = function () {
    mainImage.src = smallImage[1].src
}
smallImage[2].onclick = function () {
    mainImage.src = smallImage[2].src
}
smallImage[3].onclick = function () {
    mainImage.src = smallImage[3].src
}
