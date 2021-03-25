
$(document).ready(function(){
     console.log("People page!");
 
     //Initialize the page by displaying the list of entries, and hiding the bios page
     $('.peopleBio').hide();
     $('.peopleList').show();
     $('#backToPeopleList').on("click", backToPeopleList);
    
 
     
     /* Code used for previous iteration of the website 
     let faculty = [
         {id: 101, firstName: 'Nike',  lastName: 'Dattani',   imgName: 'NikeDattani.png',     title: 'PhD Oxford'},
         {id: 102, firstName: 'Erin',  lastName: 'Zuo',       imgName: 'ErinZuo.jpg',         title: 'PhD WIT'},
         {id: 103, firstName: 'Deyan', lastName: 'Mihaylov',  imgName: 'DeyanMihaylov.png',   title: 'PhD Cambridge'}
     ];
     */
 
 
     //List of ids corresponding to each entries biography 
     let ids = [101, 102, 103, 104, 105, 106, 107, 108, 109];
 
     //If the div containing the id is click the showBio function will be run 
     ids.forEach(id => {
         $(`#${id}`).on("click", showBio);
     });
 
     //Toggles between displaying the list of people and their biographies
     function showBio(){
         console.log("You clicked on id: ", this.id);
         $('.peopleList').hide();
         $('.peopleBio').show();
     };
 
     //Back button again toggles which screen is displayed
     function backToPeopleList(){
         $('.peopleList').show();
         $('.peopleBio').hide();
     }
 })

 function scrollToTop(){
     window.scroll({
          top: 500, 
          left: 0, 
          behavior: 'smooth'
        });
}

const button = document.getElementById("buttonID");
button.addEventListener("click", () => {
     scrollToTop();
})
 
 
/* 
Js for Card Flip Template, 


/* 
Js for Card Flip Template


const card = document.querySelectorAll('.itemInner');

card.forEach((card) => {
     card.addEventListener("click", () => {
          if(card.classList.contains('hideBio') == false){
               card.classList.toggle("is-flipped");
          }
     });
});





window.addEventListener('load', function(){
     var clientHeight = document.getElementById('item-main').clientHeight;
     var clientWidth = document.getElementById('item-main').clientWidth;
     var imgClientHeight = document.getElementById('mainImg').clientHeight;
     console.log(imgClientHeight);

     

     var elements = document.querySelectorAll("#cardFace");
     elements.forEach((elements) => {
          elements.style.width = clientWidth + "px";
          elements.style.height = clientHeight + "px";
     
     })

     var elements = document.querySelectorAll(".imgSettings");
     elements.forEach((elements) => {
          elements.style.height = imgClientHeight + "px";
     
     })

     var elements = document.querySelectorAll(".imgSettings2");
     elements.forEach((elements) => {
          elements.style.height = imgClientHeight - 10 + "px";
     
     })

     var elements = document.querySelectorAll("#getWidth");
     elements.forEach((elements) => {
          elements.style.width = clientWidth + "px";
     
     })


})

$(document).ready(function () {

     var width = document.body.clientWidth;
     $(window).on('resize', function () {
          
          var newWidth = document.body.clientWidth;
          if(width != newWidth){
               location.reload();
          }
               
     });
});
*/