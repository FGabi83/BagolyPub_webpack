/*function scrollToProducts() {
  const  arrow = document.querySelector('.js-scroll-to-products');
  const productsSection = document.querySelector('.js-products');
  const siteHeader = document.querySelector("header");
  
  arrow.addEventListener('click', function (e) {
    e.preventDefault();
    const headerHeight = siteHeader.offsetHeight;
    const productsTop = productsSection.offsetTop;
    window.scrollTo({
      top: productsTop - headerHeight,
      behavior: 'smooth'
    });
  });
};
  



export default scrollToProducts;*/

function scrollToProducts() {
  const arrow = document.querySelector('.js-scroll-to-products');
  const productsSection = document.querySelector('.js-products');
  const siteHeader = document.querySelector("header");

  arrow.addEventListener('click', function (e) {
    e.preventDefault();
    const headerHeight = siteHeader.offsetHeight;

    // pontos pozíció margin-nal együtt:
    const productsTop = productsSection.getBoundingClientRect().top + window.scrollY;
    const style = window.getComputedStyle(productsSection);
    const marginTop = parseInt(style.marginTop) || 0;

    window.scrollTo({
      top: productsTop - headerHeight - marginTop,
      behavior: 'smooth'
    });
  });
}

export default scrollToProducts;
