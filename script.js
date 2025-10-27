const btn = document.querySelector("#btn")
const body = document.querySelector('.body')

btn.addEventListener("click", function() {
  body.classList.toggle('blue')
})