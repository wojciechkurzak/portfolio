const aboutImage = document.querySelector('.about-image')
const aboutText = document.querySelector('.about-text')
const skills = document.querySelector('.skills > .container')
const projects = document.querySelector('.projects > .container')
const contact = document.querySelector('.contact > .container')

gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(
  aboutImage,
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: aboutImage,
      start: 'top 95%',
      once: true,
    },
  }
)

gsap.fromTo(
  aboutText,
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: aboutText,
      start: 'top 95%',
      once: true,
    },
  }
)

gsap.fromTo(
  skills,
  {
    y: 70,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: skills,
      start: 'top 95%',
      once: true,
    },
  }
)

gsap.fromTo(
  projects,
  {
    y: 70,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: projects,
      start: 'top 95%',
      once: true,
    },
  }
)

gsap.fromTo(
  contact,
  {
    y: 70,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: contact,
      start: 'top 95%',
      once: true,
    },
  }
)
