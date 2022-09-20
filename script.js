const menu = document.querySelector('.mobile-menu');
const modal = document.querySelector('.modal')
const headerLinks = document.querySelector('.links')
const headerText = document.querySelector('.header-text')
const menuIcon = document.querySelector('.menu-icon')

menu.addEventListener('click', () => {

    if(!modal.classList.contains('show')) {
        headerText.style.display = 'none'
        menuIcon.src = './images/icon-close.svg'
    } else {
        headerText.style.display = 'flex'
        menuIcon.src = './images/icon-hamburger.svg'
    }


    modal.classList.toggle('show')
    headerLinks.classList.toggle('links-active')

    
    
})