const card = document.querySelectorAll('.itemInner');

card.forEach((card) => {
     card.addEventListener("click", () => {
          card.classList.toggle("is-flipped");
     });
});


var clientHeight = document.getElementById('101').clientHeight;
var clientWidth = document.getElementById('101').clientWidth;
console.log(clientHeight);
console.log(clientWidth);


/*document.getElementById('cardFace').style.height = clientHeight + "px";*/
document.getElementById('cardFace').style.width = clientWidth + "px";
