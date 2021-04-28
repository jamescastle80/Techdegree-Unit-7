// alert banner

const alertBanner = document.getElementById("alert");
const bell = document.getElementById("bell");
let greenDot = document.createElement('img');


function alertDot() {
    greenDot.className = 'green-dot';
     if (alertBanner.style.display !== "none") {
        bell.appendChild(greenDot);
     }
}

alertDot();

alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
        </div>
    `

    alertBanner.addEventListener('click', e => {
        const element = e.target;
        if (element.classList.contains("alert-banner-close")) {
            alertBanner.style.display = "none";
            bell.removeChild(greenDot);
        }
    });

// line graph

const trafficCanvas = document.getElementById("traffic-chart");

const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        fill: true,
        tension: .5,
        data: [500, 1200, 1000, 2000, 1500, 1750, 1250, 1800, 2200, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

const trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});





// bar graph
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 120, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1,
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// pie chart

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
}

const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// form

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");



send.addEventListener('click', () => {
    if (user.textContent === "" && message.textContent === "" ) {
        alert("Please fill out user and message fields before sending");
    } else if (user.textContent === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.textContent === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message succesfully sent to: ${user.value}`);
    }
});
