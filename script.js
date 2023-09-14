const button = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

button.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-button')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});