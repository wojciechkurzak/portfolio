const navButton = document.querySelector('.nav-button')
const navList = document.querySelector('.nav-list')
const menuList = document.querySelectorAll('.nav-list > ul > li > a')
const navListButtons = document.querySelectorAll('.nav-list > ul > li > a')
const headerButtons = document.querySelectorAll('.header-title > .buttons > a')
const homeButton = document.querySelector('.nav-image > a')

navButton.addEventListener('click', () => {
  navList.classList.toggle('nav-open')
  navButton.classList.toggle('nav-close-button')
})

menuList.forEach((element) =>
  element.addEventListener('click', () => {
    navList.classList.remove('nav-open')
    navButton.classList.remove('nav-close-button')
  })
)

const navSections = ['#about', '#skills', '#projects', '#contact']

navListButtons.forEach((button, index) =>
  button.addEventListener('click', () => {
    document.querySelector(navSections[index]).scrollIntoView({
      behavior: 'smooth',
    })
  })
)

const headerSections = ['#contact', '#projects']

headerButtons.forEach((button, index) =>
  button.addEventListener('click', () => {
    document.querySelector(headerSections[index]).scrollIntoView({
      behavior: 'smooth',
    })
  })
)

homeButton.addEventListener('click', () => {
  document.querySelector('header').scrollIntoView({
    behavior: 'smooth',
  })
})
