{

  function toggleMenu() {
    console.log('ahgsggs');
    const navButton = document.querySelector('.burger');
    const sidenav = document.querySelector('.menu');

    navButton.addEventListener('click', function(e){
      e.preventDefault();

      sidenav.classList.toggle('nav-active');
      console.log('gfff');
    });
  }

  const app = () => {
    toggleMenu();
  };

  app();

}
