
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
 
     //Sleep function allows implementation of a delay in the running of code
     function sleep (time){
          return new Promise((resolve) => setTimeout(resolve,time));
      }


     //Variable used to indicate whether bio is toggled or not
     var bioToggle = 0;
     //Toggles between displaying the list of people and their biographies
     function showBio(){
          console.log("You clicked on id: ", this.id);
          
          $('.peopleList').hide();
          $('.peopleBio').show();
          //Allowing page to load before running
          sleep(100).then(() => {
               setToggle(1);
           });
          
     };
 
     //Back button again toggles which screen is displayed
     function backToPeopleList(){
          $('.peopleList').show();
          $('.peopleBio').hide();
          sleep(100).then(() => {
               setToggle(0);
           });  
     }
 })

//Function scrolls page to the indicated position
function scrollToTop(){
     window.scroll({
          top: 500, //Set to 500 so that it stops with the back button on screen
          left: 0, 
          behavior: 'smooth'
        });
}

//Runs scrollToTop function on click of the scroll button
const button = document.getElementById("buttonID");
button.addEventListener("click", () => {
     scrollToTop();
})
 
//Set function sets the value of variable bioToggle for use within other functions
function setToggle(x){
     bioToggle = x
}

//get function returns the value of variable bioToggle for use within other functions
function getToggle(){
     return bioToggle;
}

//The purpose of the following section is to fix the error in which 
//pressing the back button after going to the bio section would not
// actually send the user back to the list but instead stay on the bios
//page and go to the top it (effectively the same as refreshing a normal page)


//function to run when the back button is pressed while on the people page
$(window).on('popstate', function(event) {
     //Test to see if value returned is correct
     console.log(getToggle()); 
     //Conditional statement that only applies the following code if on the bios page
     if(getToggle() == 1){
          //Toggles the visibility of bios so that the peopleList is visible
          $('.peopleList').show();
          $('.peopleBio').hide();
          //Reset value of Toggle as the page has been changed
          setToggle(0);
     }
});
 
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