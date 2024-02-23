// Toggle Menu
let toggleMenu = document.querySelector(".menu-moblie")
let btnMenu = document.querySelector(".btn-menu")
let bgOverMenu = document.querySelector(".bg-over-menu")
let btnClose = document.querySelector(".btn-close")

const buttons = [btnMenu, bgOverMenu, btnClose]

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    toggleMenu.classList.toggle("-translate-x-[120%]")
    bgOverMenu.classList.toggle("translate-x-full")
  })
})
