const goUpBtn = document.querySelector('.go-up')

window.addEventListener('scroll', trackScroll)
goUpBtn.addEventListener('click', backToTop)

function trackScroll() {
  let scrolled = window.pageYOffset

  if (scrolled > 0) {
    goUpBtn.classList.add('go-up-enable')
  } else {
    goUpBtn.classList.remove('go-up-enable')
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30)
    setTimeout(backToTop, 0)
  }
}