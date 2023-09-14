import Splide from '@splidejs/splide'; // https://splidejs.com/  https://github.com/Splidejs/splide

window.addEventListener('DOMContentLoaded', (e) => {

  externalLinks()
  homeRollovers()

  // slider banner
  if (document.querySelector('.splide')) {
    const collection = document.getElementsByClassName('splide');
    for (let item of collection) {
      if (item.id) {
        new Splide(`#${item.id}`).mount();
      }
    }
  }

})


function homeRollovers() {

  let aelements = document.querySelectorAll('a.roller')
  aelements.forEach((el) => {
    el.addEventListener('mouseover', setActive)
    el.addEventListener('mouseout', unActive)
  })
  const mouseoverEvent = new Event('mouseover');
  document.getElementById(`roller-vert`).dispatchEvent(mouseoverEvent)

  // setActive('vert')

  function setActive () {
    // console.log(this)
    this.classList.add('active')
    document.getElementById(`rolled-${this.dataset.for}`).style.display = 'block'
  }
  function unActive () {
    // console.log(this)
    this.classList.remove('active')
    document.getElementById(`rolled-${this.dataset.for}`).style.display = 'none'
  }


}


function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}
