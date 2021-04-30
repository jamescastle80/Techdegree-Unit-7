// alert banner

const alertBanner = document.getElementById("alert");
const bell = document.getElementById("bell");
let greenDot = document.createElement("img");
let windowDiv = document.createElement("div");
let notificationUL = document.createElement("ul");
const modal = document.getElementById("myModal");


alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p class="alert-message"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
        </div>
    `

    alertBanner.addEventListener('click', e => {
        const element = e.target;
        if (element.classList.contains("alert-banner-close")) {
            alertBanner.style.display = "none";
        }
    });

    function alertDot() {
        greenDot.className = 'green-dot';
         if (alertBanner.style.display !== "none") {
            bell.appendChild(greenDot);
         }
    }
    
    alertDot();    

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
bell.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

// message form

const userField = document.getElementById("userField");
const messageField = document.getElementById("messageField");
const send = document.getElementById("send");
const timeZone = document.getElementById("timezone");
const togOne = document.getElementById("checkbox1");
const togtwo = document.getElementById("checkbox2");

send.addEventListener('click', () => {
    if (userField.value === "" && messageField.value === "" ) {
        alert("Please fill out user and message fields before sending");
    } else if (userField.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (messageField.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${userField.value}`);
    }
});


// Local Storage for settings

let settings = document.getElementById("settings");
let checkboxOne = document.getElementById("checkbox1");
let checkboxTwo = document.getElementById("checkbox2");
let timezone = document.getElementById("timezone");

// Store Values

function saveSettings() {
    localStorage.setItem("checkbox1", checkboxOne.checked);
    localStorage.setItem("checkbox2", checkboxTwo.checked);
    localStorage.setItem("timezone", timezone.selectedIndex);
}

// listen for click save

settings.addEventListener('click', e => {
    if (e.target.id === "save") {
        saveSettings();
    } else if (e.target.id === "cancel") {
        localStorage.clear();
    }
});

// on page load

function returnSettings() {
    let checkOne = JSON.parse(localStorage.getItem("checkbox1"));
    let checkTwo = JSON.parse(localStorage.getItem("checkbox2"));
    let checkTime = JSON.parse(localStorage.getItem("timezone"));
    if (checkOne) {
        checkboxOne.checked = checkOne;
    } if (checkTwo) {
        checkboxTwo.checked = checkTwo;
    } if (checkTime) {
        timezone.selectedIndex = checkTime;
    }
}

returnSettings();


