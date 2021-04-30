

let names = [
    {
        name:"james castle",
    },
    {
        name:"victoria chambers",
    },
    {
        name:"dale byrd",
    },
    {
        name:"dawn wood",
    },
    {
        name:"dan oliver",
    },
    {
        name:"oliver miller",
    },
    {
        name:"dan marchant",
    },
    {
        name:"philip charlton",
    },
    {
        name:"aaron foster",
    },
    {
        name:"garry maddison"
    }
]

function createNames(arrayOfNames) {
    let liElement = "" ;
    for (let i= 0; i <arrayOfNames.length; i++) {
    liElement += `<li>${arrayOfNames[i].name}</li>`
    }
    document.getElementById("names-container").innerHTML= liElement;
 }

createNames(names);

function filterNames(event) {
    var searchvalue = event.target.value.toLowerCase();
    var filterNames = names.filter((v,i) => {
        return(v.name.includes(searchvalue));
    })
    createNames(filterNames);
 }

 let nameLI = document.getElementById("names-container");
 let nameInput = document.getElementById("userField");

 nameLI.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    nameInput.value = e.target.textContent;
 });



 

 
 
