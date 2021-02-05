let more = document.getElementsByClassName('moreInfo');
let moreTxt = document.getElementsByClassName('description');
let moreToggle = document.getElementsByClassName('lecRow');



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
        $(TD).animate({height: 205}, 1000);
        $(TDTxt).animate({height: 205}, 1000);
        $(TDTxt).slideDown(1000);
        $(TDTxt).css("display", "block");
    }
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
        $(EB).animate({height: 205}, 1000);
        $(EBTxt).animate({height: 205}, 1000);
        $(EBTxt).slideDown(1000);
        $(EBTxt).css("display", "block");
    }
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
        $(BK).animate({height: 205}, 1000);
        $(BKTxt).animate({height: 205}, 1000);
        $(BKTxt).slideDown(1000);
        $(BKTxt).css("display", "block");
    }
}); 

/*For 4th Lecture box*/
let LZ = document.getElementById('LZInfo');
let LZTxt = document.getElementById('LZDesc');
let LZToggle = document.getElementById('LZRow');
$(LZToggle).click(function () {
    if ($(LZ).height() != 0) {
        $(LZ).animate({ height: 0 }, 1000);
        $(LZTxt).slideUp(1000);
    }

    else {
        $(LZ).animate({ height: 205 }, 1000);
        $(LZTxt).animate({ height: 205 }, 1000);
        $(LZTxt).slideDown(1000);
        $(LZTxt).css("display", "block");
    }
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
        $(AO).animate({ height: 205 }, 1000);
        $(AOTxt).animate({ height: 205 }, 1000);
        $(AOTxt).slideDown(1000);
        $(AOTxt).css("display", "block");
    }
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
        $(GL).animate({ height: 205 }, 1000);
        $(GLTxt).animate({ height: 205 }, 1000);
        $(GLTxt).slideDown(1000);
        $(GLTxt).css("display", "block");
    }
}); 

