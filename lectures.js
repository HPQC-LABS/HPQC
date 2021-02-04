let more = document.getElementsByClassName('moreInfo');
let moreToggle = document.getElementsByClassName('lecRow');

$(moreToggle).click(function(){
    
    $(more).slideToggle(1000);
    $(more).css("display", "block");

});
