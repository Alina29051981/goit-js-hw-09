const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll('.nav-link').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage || (linkPage === 'index.html' && currentPage === '')) {
    link.classList.add('active');
  }
});

