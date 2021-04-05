//Function scrolls page to the indicated position
function scrollToTop(){
    window.scroll({
         top: 0, //Set to 0 so that it stops at top of the window
         left: 0, 
         behavior: 'smooth'
       });
}

//Runs scrollToTop function on click of the scroll button
const button = document.getElementById("buttonID");
button.addEventListener("click", () => {
    scrollToTop();
})