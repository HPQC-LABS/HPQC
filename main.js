$(document).ready(function(){
    console.log("People page!");

    $('.peopleBio').hide();
    $('.peopleList').show();
   
    let faculty = [
        {id: 11, firstName: 'Nike',  lastName: 'Dattani',   imgName: 'NikeDattani.png',     title: 'PhD Oxford'},
        {id: 12, firstName: 'Erin',  lastName: 'Zuo',       imgName: 'ErinZuo.jpg',         title: 'PhD WIT'},
        {id: 13, firstName: 'Deyan', lastName: 'Mihaylov',  imgName: 'DeyanMihaylov.png',   title: 'PhD Cambridge'}
    ]
    facultyCards = "";
    faculty.forEach(p => {
        $('#peopleFlexList').append(createCard(p)).on("click", showBio);
    })
    // $('#peopleFlexList').html(createCard(faculty[0])) ; //.on("click", showBio);
    document.getElementById('backToPeopleList').addEventListener('click', backToPeopleList);

    function addEventListener(elementId){
        document.getElementById(id).addEventListener('click', showBio);
    };


    function createCard(person) {
        let card = `
            <div class="person" id=${person.id}" > 
                <p class="personName"> ${person.firstName} ${person.lastName} </p>
                <img src="images/${person.imgName}">
                <p class="personTitle">${person.title}</p>
                <span style="display:block; margin-top:-27px;"></span>
            </div>
        `;        
        return card;
    }

    function showBio(){
        console.log("This is element", this.id);
        $('.peopleList').hide();
        $('.peopleBio').show();
    };

    function backToPeopleList(){
        $('.peopleList').show();
        $('.peopleBio').hide();
    }
})