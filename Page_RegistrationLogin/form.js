//Return to landing page when Home is clicked on nav bar
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homeLink');
    
    homeLink.addEventListener('click', () => {
      // Redirect to the landing page
      window.location.href = '../Landing Page/landingpage.html';
    });
  });