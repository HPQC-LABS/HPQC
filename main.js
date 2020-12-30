$(document).ready(function(){
    console.log("People page!");

    $('.peopleBio').hide();
    $('.peopleList').show();
   
    let faculty = [
        {id: 101, firstName: 'Nike',  lastName: 'Dattani',   imgName: 'NikeDattani.png',     title: 'PhD Oxford'},
        {id: 102, firstName: 'Erin',  lastName: 'Zuo',       imgName: 'ErinZuo.jpg',         title: 'PhD WIT'},
        {id: 103, firstName: 'Deyan', lastName: 'Mihaylov',  imgName: 'DeyanMihaylov.png',   title: 'PhD Cambridge'}
    ]

    faculty.forEach(person => {
        let newCard = `
            <div class="person" id=${person.id}" >
                <p class="personName"> ${person.firstName} ${person.lastName} </p>
                <img src="images/${person.imgName}">
                <p class="personTitle">${person.title}</p>
                <span style="display:block; margin-top:-27px;"></span>
            </div>`      
        $('#peopleFlexList').append(newCard); 
    });
    
    // Need to attach event listener synchronously!!
    faculty.forEach(p => {
        console.log(p.firstName);
        $(`#${p.id}`).on("click", showBio);
    });

    document.getElementById('backToPeopleList').addEventListener('click', backToPeopleList);

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