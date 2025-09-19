function showDetails() {
  const items = document.querySelectorAll(".js-item");
  const headers = document.querySelectorAll(".js-header");
  const headline = document.querySelector(".js-headline");
  
    
  headers.forEach(header => {
    header.addEventListener("click", function() {
      const selectedItem = this.parentElement;
      const icon = this.querySelector(".js-list-toggle");
      const content = this.nextElementSibling;
            
      items.forEach(item => {
        if (item !== selectedItem) {
          item.classList.add("hidden");
        }else {
          item.classList.add("selectedItem");
        }
      });
      // Make the selected content visible
      content.classList.add("visible-content");

      // Hide the arow icon
      icon.classList.add("hidden");
      //Hide headline
      headline.classList.add("hidden");
      
    });
    
  });
  
  const backButtons = document.querySelectorAll(".js-back-button");
  backButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); // ne triggerelje a szülő click-et

      //Show all hidden items
      items.forEach(item => {
        item.classList.remove("hidden");
        item.classList.remove("selectedItem");
    });

      const allContents = document.querySelectorAll(".js-content");
      const allIcons = document.querySelectorAll(".js-list-toggle");

      allContents.forEach(content => content.classList.remove("visible-content"));
      allIcons.forEach(icon => icon.classList.remove("hidden"));
      headline.classList.remove("hidden");
      
    });
  });

 
};
  
  export default showDetails;