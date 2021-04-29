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

// form

const userField = document.getElementById("userField");
const messageField = document.getElementById("messageField");
const send = document.getElementById("send");



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
