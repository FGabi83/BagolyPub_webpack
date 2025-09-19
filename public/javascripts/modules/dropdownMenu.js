function dropdownMenu() {
  const navMenu = document.querySelector(".js-nav--menu");
  const navWrapper = document.querySelector(".js-nav--wrapper");
  const navLinks = document.querySelectorAll(".js-nav--item");
  
  navMenu.addEventListener("click", () => { 
    navWrapper.classList.toggle("js-is-open");
    navMenu.classList.toggle("js-highlight");
  }); 

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navWrapper.classList.remove("js-is-open");
      navMenu.classList.remove("js-highlight");
    });
  });
}

export default dropdownMenu;
