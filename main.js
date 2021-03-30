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



let exit = document.getElementsByClassName('close');
let popup = document.getElementsByClassName("unsubPopup");
let overlay = document.getElementsByClassName("unsubContainer");

$(exit).click(function(){

    console.log("test");
    $(popup).css("display", "none");
    $(overlay).css("display", "none");

});

let unsub = document.getElementsByClassName("unsubButton");

$(unsub).click(function(){

    console.log("test");
    $(popup).css("display", "block");
    $(overlay).css("display", "block");

});


let confirm = document.getElementsByClassName('confirmButton');

$(confirm).click(function(){

    console.log("unsubscribing confirmed");

});
