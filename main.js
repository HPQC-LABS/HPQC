$(document).ready(function(){
    console.log("People page!");

    $('.peopleBio').hide();
    $('.peopleList').show();
   
    let faculty = [
        {id: 101, firstName: 'Nike',  lastName: 'Dattani',   imgName: 'NikeDattani.png',     title: 'PhD Oxford'},
        {id: 102, firstName: 'Erin',  lastName: 'Zuo',       imgName: 'ErinZuo.jpg',         title: 'PhD WIT'},
        {id: 103, firstName: 'Deyan', lastName: 'Mihaylov',  imgName: 'DeyanMihaylov.png',   title: 'PhD Cambridge'}
    ]

    createCards(faculty, appendPerson);

    function createCards(people, callback){
        people.forEach(person => {
            let card = `
                <div class="person" id=${person.id}" >
                    <p class="personName"> ${person.firstName} ${person.lastName} </p>
                    <img src="images/${person.imgName}">
                    <p class="personTitle">${person.title}</p>
                    <span style="display:block; margin-top:-27px;"></span>
                </div>`                
            callback(card, person.id, addEventListener);
        });
    };

    document.getElementById('backToPeopleList').addEventListener('click', backToPeopleList);

    function appendPerson(card, id, callback){
        console.log("Appending person for: ", id);
        $('#peopleFlexList').append(card);
        callback(id);
    }

    function addEventListener(elementId){
        console.log("Adding event listener for: ", elementId);
        $(`#${elementId}`).on("click", showBio);
    };

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