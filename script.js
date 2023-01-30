const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
// const closeButton = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block';
})

// closeButton.addEventListener('click', () => {
//   popup.style.display = 'none';
// })

popup.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0]
  if(classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === 'popup-link' || classNameOfClickedElement === 'popup-wrapper') {
    popup.style.display = 'none';
  }
})