
window.addEventListener('DOMContentLoaded', (e) => {

  externalLinks()

})



function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}
