const card = document.querySelectorAll('.itemInner');

card.forEach((card) => {
     card.addEventListener("click", () => {
          card.classList.toggle("is-flipped");
     });
});

/*
const seeBio = document.getElementsByClassName('showBio');
if(seeBio.classList.contains('cardBio')){
     alert("test");
}
*/

window.addEventListener('load', function(){
     var clientHeight = document.getElementById('item-main').clientHeight;
     var clientWidth = document.getElementById('item-main').clientWidth;
     console.log(clientHeight);
     console.log(clientWidth);
     
     
     /*document.getElementById('cardFace').style.height = clientHeight + "px";*/
     console.log(document.querySelectorAll("#cardFace"));
     var elements = document.querySelectorAll("#cardFace");
     elements.forEach((elements) => {
          elements.style.width = clientWidth + "px";
          elements.style.height = clientHeight + "px";
     
     })
})

/*
for(var i=0; i< elements.length; i++){

}

/*
Array.from(elements).forEach(function(elements){
     elements.style.width = clientWidth + "px";
     elements.style.height = clientHeight + "px";
});
*/