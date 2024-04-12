function activeNavItem() {
  let links = document.querySelectorAll('.js-nav--item');
  let path = window.location.pathname;
  let pathArray = path.split('/');
  let currentPath = pathArray[pathArray.length - 1];
  
  links.forEach(link => {
    let linkPath = link.getAttribute('href');
    let linkArray = linkPath.split('/');
    let linkCurrentPath = linkArray[linkArray.length - 1];
    console.log(linkCurrentPath);
    if (linkCurrentPath === currentPath) {
      link.classList.add('js-nav--item__active');
    }
  });

  
}

export default activeNavItem;