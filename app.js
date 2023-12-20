window.addEventListener('scroll', function() {
  let scrollDiv = document.getElementById('mainNavbar');
  let scrollPosition = window.scrollY;

  let scrollThreshold = 15;

  if (scrollPosition > scrollThreshold) {
    scrollDiv.classList.add('scrolled');
  } else {
    scrollDiv.classList.remove('scrolled');
  }
});