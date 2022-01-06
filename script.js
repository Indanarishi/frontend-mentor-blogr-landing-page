const navbarLists = document.querySelectorAll('.navbar-list a')
const navbarListsDown = document.querySelectorAll('.navbar-dropdown .navbar-lists .navbar-list a')
const navbarListConnect = document.querySelector('.navbar-list-connect')
const navbarListConnectDown = document.querySelector('.navbar-dropdown .navbar-list-connect')
const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const navbar = document.getElementById('navbar')

navbarLists[2].addEventListener('click', (e) => {
    navbarListConnect.classList.toggle('show')
    navbarLists[2].classList.toggle('show')
})

navbarListsDown[2].addEventListener('click', () => {
    navbarListConnectDown.classList.toggle('show')
    navbarListsDown[2].classList.toggle('show')
})

openBtn.addEventListener('click', () => {
    navbar.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('show')
})

window.onscroll = function() {
    if (window.scrollY > 0) {
        navbar.style.background = 'linear-gradient(90deg, rgba(255,143,112,1) 0%, rgba(255,61,84,1) 100%)'
    } else {
        if (!navbar.classList.contains('show')) {
            navbar.style.background = 'transparent'
        } else {
            navbar.style.background = 'linear-gradient(90deg, rgba(255,143,112,1) 0%, rgba(255,61,84,1) 100%)'
        }
    }
}