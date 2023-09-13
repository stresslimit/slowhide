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
  let a = document.querySelectorAll('a.roller')
  a.forEach((el) => {
    el.addEventListener('mouseover', function() {
      // console.log(`rolled-${el.dataset.for}`)
      document.getElementById(`rolled-${el.dataset.for}`).style.display = 'block'
    })
    el.addEventListener('mouseout', function() {
      document.getElementById(`rolled-${el.dataset.for}`).style.display = 'none'
    })
  })
}


function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}
