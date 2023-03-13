const navButton = document.querySelector('.nav-button')
const navList = document.querySelector('.nav-list')
const menuList = document.querySelectorAll('.nav-list > ul > li > a')

navButton.addEventListener('click', () => {
	navList.classList.toggle('nav-open')
	navButton.classList.toggle('nav-close-button')
})

menuList.forEach((element) =>
	element.addEventListener('click', () => {
		navList.classList.remove('nav-open')
	})
)
