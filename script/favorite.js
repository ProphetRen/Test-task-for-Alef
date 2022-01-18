const likeButtons = document.querySelectorAll('.like')
const alertAddFavorite = document.querySelector('#alert-add-favorite')
const alertAddFavoriteCloseBtn = alertAddFavorite.querySelector('.close')

for (const likeBtn of likeButtons) {
  likeBtn.addEventListener('click', () => {
    if (!likeBtn.classList.contains('clicked')) {
      likeBtn.classList.add('clicked')
      showAlert()

      setTimeout(hideAlert, 3000)
    } else {
      likeBtn.classList.remove('clicked')
    }
  })
}

alertAddFavoriteCloseBtn.addEventListener('click', hideAlert)

function showAlert() {
  alertAddFavorite.classList.add('enabled')
}

function hideAlert() {
  alertAddFavorite.classList.remove('enabled')
}