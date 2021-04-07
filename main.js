$(document).ready(function(){
    console.log("People page!");

    $('.peopleBio').hide();
    $('.peopleList').show();
    $('#backToPeopleList').on("click", backToPeopleList);
   
    let faculty = [
        {id: 101, firstName: 'Nike',  lastName: 'Dattani',   imgName: 'NikeDattani.png',     title: 'PhD Oxford'},
        {id: 102, firstName: 'Erin',  lastName: 'Zuo',       imgName: 'ErinZuo.jpg',         title: 'PhD WIT'},
        {id: 103, firstName: 'Deyan', lastName: 'Mihaylov',  imgName: 'DeyanMihaylov.png',   title: 'PhD Cambridge'}
    ];

    let ids = [101, 102, 103, 104, 105, 106, 107, 108, 109];

    ids.forEach(id => {
        $(`#${id}`).on("click", showBio);
    });

    function showBio(){
        console.log("You clicked on id: ", this.id);
        $('.peopleList').hide();
        $('.peopleBio').show();
    };

    function backToPeopleList(){
        $('.peopleList').show();
        $('.peopleBio').hide();
    }
})

/*********************************************************************************/
/* Responsive NavBar                                                             */
/*********************************************************************************/

let mainNav = document.getElementById('main-nav');
let navBarToggle = document.getElementById('navbar-toggle');
var pressed = 0;
var hidden = 1;
var expand = 0;

$(navBarToggle).click(function(){
    pressed = 1;
    if($(mainNav).height() != 0){
        $(mainNav).animate({height: 0}, 1000);
        $(this).toggleClass('openAfter');
        sleep(100).then(() => {
            $(this).toggleClass('openDuring');
        });
        sleep(100).then(() => {
            $(this).toggleClass('open');
        });
        hidden = 1;
    }
        
    else {
        $(mainNav).animate({height: 250}, 1000);
        $(mainNav).css("display", "block");
        $(this).toggleClass('open');
        sleep(100).then(() => {
            $(this).toggleClass('openDuring');
        });
        sleep(150).then(() => {
            $(this).toggleClass('openAfter');
        });
        hidden = 0;
    }   

});

function sleep (time){
    return new Promise((resolve) => setTimeout(resolve,time));
}

/*Checking window size so that nav bar doesn't format incorrectly*/
var size = window.matchMedia("(min-width: 890px)")

function sizeToggle(x){
    if (size.matches) {
        $(mainNav).css("display", "flex");
        if(pressed === 1){
            $(mainNav).css("transform", "translateY(-20px)");
            expand = 1;
        }
        if(hidden === 0){
            $(mainNav).css("transform", "translateY(105px)");
        }
    }
    else 
        $(mainNav).css("display", "block");
        if(hidden === 0 & pressed === 1 & expand === 1 & size.matches === false){
            $(mainNav).css("transform", "translateY(-10px)");
        }

}

sizeToggle(size)
size.addListener(sizeToggle)



//Js for Unsubscribe feature


let exit = document.getElementsByClassName('close');
let popup = document.getElementsByClassName("unsubPopup");
let overlay = document.getElementsByClassName("unsubContainer");

$(exit).click(function(){

    $(popup).css("display", "none");
    $(overlay).css("display", "none");

    if(endToggle == 1){
        $(endScreen).css("display", "none");
        endToggle = 0;
    }

});

let unsub = document.getElementsByClassName("unsubButton");

$(unsub).click(function(){

    $(popup).css("display", "block");
    $(overlay).css("display", "block");

});


let confirm = document.getElementById('confirm');
let submit = document.getElementById('submitUnsub');
let endScreen = document.getElementById('end');
let emailScreen = document.getElementsByClassName('getEmail');

var endToggle = 0;

$(confirm).click(function(){

    console.log("unsubscribing confirmed");
    $(popup).css("display", "none");
    $(emailScreen).css("display", "block");

});

$(submit).click(function(){

    $(emailScreen).css("display", "none");
    $(endScreen).css("display", "block");
    endToggle = 1
    var email = document.getElementById("email").value;
    console.log(email)
});

let deny = document.getElementById('deny');

$(deny).click(function(){

    console.log("unsubscribing cancelled");
    $(popup).css("display", "none");
    $(overlay).css("display", "none");

});


window.addEventListener('load', function(){
    
    

    if(window.location.href.indexOf("unsub") != -1){
        
        $(popup).css("display", "block");
        $(overlay).css("display", "block");
    }

    /* Testing comparison on local host 

    console.log(window.location.href);
    if(window.location.href.indexOf("host") != -1){
        console.log("url comparison works"); 
    }
    */
    /*
    if(window.location.href.indexOf("host") != -1){
    console.log("url comparison works"); 
        $(popup).css("display", "block");
        $(overlay).css("display", "block");
    }*/

});
