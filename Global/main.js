//Back to Top Button
//------------------
const BttBtn = document.getElementById('backToTopBtn'); //Get button element

function toggleBTT() 
{
  if (window.scrollY > 180) //If user scrolls passed 180px
  {
    BttBtn.style.display = 'block'; //Display button
  } 
  else 
  {
    BttBtn.style.display = 'none'; //Hide button
  }
}

function scrollToTop() //Call function
{
  window.scrollTo({ top: 0, behavior: 'smooth' }); //Creates smooth scrolling back to top of page
}

window.addEventListener('scroll', toggleBTT);
BttBtn.addEventListener('click', scrollToTop);

//Hamburger Nav Logic
//-------------------
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('mobile-sidebar');

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
});