
/*
let hover = document.getElementById("face1");
let element = document.getElementById("BKRow");



hover.addEventListener("mouseover", function(event){
    $(element).css("transform", "rotateY(10deg)");

});

hover.addEventListener("mouseout", function(event){
    $(element).css("transform", "rotateY(0deg)");

});
*/
const card = document.querySelectorAll('.itemInner');

card.forEach((card) => {
     card.addEventListener("click", () => {
          card.classList.toggle("is-flipped");
     });
});


/*For 1st Lecture box*/
let TD = document.getElementById('TDInfo');
let TDTxt = document.getElementById('TDDesc');
let TDToggle = document.getElementById('TDRow');
$(TDToggle).click(function(){
    if($(TD).height() != 0){
        $(TD).animate({height: 0}, 1000);
        $(TDTxt).slideUp(1000);
    }
        
    else{
        $(TD).animate({height: "100%"}, 1000);
        $(TDTxt).slideDown(1000);
        $(TDTxt).css("display", "block");
    }
    document.getElementById('TDArrow').classList.toggle('rotated');
});

/*For 2nd Lecture box*/
let EB = document.getElementById('EBInfo');
let EBTxt = document.getElementById('EBDesc');
let EBToggle = document.getElementById('EBRow');
$(EBToggle).click(function(){
    if($(EB).height() != 0){
        $(EB).animate({height: 0}, 1000);
        $(EBTxt).slideUp(1000);
    }
        
    else{
        $(EB).animate({height: "100%"}, 1000);
        $(EBTxt).slideDown(1000);
        $(EBTxt).css("display", "block");
    }
    document.getElementById('EBArrow').classList.toggle('rotated');
}); 

/*For 3rd Lecture box*/
let BK = document.getElementById('BKInfo');
let BKTxt = document.getElementById('BKDesc');
let BKToggle = document.getElementById('BKRow');
$(BKToggle).click(function(){
    if($(BK).height() != 0){
        $(BK).animate({height: 0}, 1000);
        $(BKTxt).slideUp(1000);
    }
        
    else{
        $(BK).animate({height: "100%"}, 1000);
        $(BKTxt).slideDown(1000);
        $(BKTxt).css("display", "block");
    }
    document.getElementById('BKArrow').classList.toggle('rotated');
}); 

//Once the webpage is loaded, if the width is resized, the webpage will refresh
//This is due to the way in which the entries are styled. Because they take in the height and width
//from a singular entry, if the webpage is resized the formatting won't be updated unless the page is refreshed
$(document).ready(function () {

    var width = document.body.clientWidth;
    $(window).on('resize', function () {
         
         var newWidth = document.body.clientWidth;
         
         //The reload must only happen when the width is changed as it can cause issues on mobile
         //if it checks for changes in the height as well. 
         if(width != newWidth){
              location.reload();
         }
              
    });
});


/* Additional code for upcoming lectures once they are finished

//For 4th Lecture box
let LZ = document.getElementById('LZInfo');
let LZTxt = document.getElementById('LZDesc');
let LZToggle = document.getElementById('LZRow');
$(LZToggle).click(function () {
    if ($(LZ).height() != 0) {
        $(LZ).animate({ height: 0 }, 1000);
        $(LZTxt).slideUp(1000);
    }

    else {
        $(LZ).animate({ height: "100%" }, 1000);
        $(LZTxt).slideDown(1000);
        $(LZTxt).css("display", "block");
    }
    document.getElementById('LZArrow').classList.toggle('rotated');
}); 

/*For 5th Lecture box*/
let AO = document.getElementById('AOInfo');
let AOTxt = document.getElementById('AODesc');
let AOToggle = document.getElementById('AORow');
$(AOToggle).click(function () {
    if ($(AO).height() != 0) {
        $(AO).animate({ height: 0 }, 1000);
        $(AOTxt).slideUp(1000);
    }

    else {
        $(AO).animate({ height: "100%" }, 1000);
        $(AOTxt).slideDown(1000);
        $(AOTxt).css("display", "block");
    }
    document.getElementById('AOArrow').classList.toggle('rotated');
}); 

/*For 6th Lecture box*/
let GL = document.getElementById('GLInfo');
let GLTxt = document.getElementById('GLDesc');
let GLToggle = document.getElementById('GLRow');
$(GLToggle).click(function () {
    if ($(GL).height() != 0) {
        $(GL).animate({ height: 0 }, 1000);
        $(GLTxt).slideUp(1000);
    }

    else {
        $(GL).animate({ height: "100%" }, 1000);
        $(GLTxt).slideDown(1000);
        $(GLTxt).css("display", "block");
    }
    document.getElementById('GLArrow').classList.toggle('rotated');
}); 
