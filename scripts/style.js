let $ = document;
let navBtn = $.querySelector('.nav__btn')
let mobileMenu = $.querySelector('.nav-menu ')
let menuItems = $.querySelectorAll('.menu__item')
let menuMobileItems = $.querySelectorAll('.mobile-menu__item')
let flag = true
navBtn.addEventListener('click', () => {
    if (flag) {
        navBtn.classList.add('nav__btn--open')
        mobileMenu.style.left = '0'
        flag = false
    } else {
        navBtn.classList.remove('nav__btn--open')
        mobileMenu.style.left = '-22rem'
        flag = true
    }
})


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        scrollTo(0, 770)
    })
})

menuMobileItems.forEach(item => {
    item.addEventListener('click', () => {
        scrollTo(0, 570)
    })
})