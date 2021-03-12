const card = document.querySelectorAll('.itemInner');

card.forEach((card) => {
     card.addEventListener("click", () => {
          /*console.log(card.classList);*/
          if(card.classList.contains('hideBio') == false){
               card.classList.toggle("is-flipped");
          }
     });
});





window.addEventListener('load', function(){
     var clientHeight = document.getElementById('item-main').clientHeight;
     var clientWidth = document.getElementById('item-main').clientWidth;
     /*
     console.log(clientHeight);
     console.log(clientWidth);
     console.log(document.querySelectorAll("#cardFace"));
     */
     var elements = document.querySelectorAll("#cardFace");
     elements.forEach((elements) => {
          elements.style.width = clientWidth + "px";
          elements.style.height = clientHeight + "px";
     
     })
})

