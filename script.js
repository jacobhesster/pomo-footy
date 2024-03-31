let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');

let workTime = 25; // Default work minutes
let breakTime = 5; // Default break minutes
let secondsRemaining; 
let intervalHandle; 

function tick() {
    let min = Math.floor(secondsRemaining / 60);
    let sec = secondsRemaining - (min * 60);

    if (sec < 10) {
        sec = "0" + sec;
    }

    minutesDisplay.textContent = min;
    secondsDisplay.textContent = sec;

    if (secondsRemaining === 0) {
        // Add functionality to switch to break time or finish timer 
        clearInterval(intervalHandle);  
    }

    secondsRemaining--; 
}

function startTimer() {
    secondsRemaining = workTime * 60;
    intervalHandle = setInterval(tick, 1000);
    // Disable start button when the timer is running
}

// Add event listeners to 'pause' and 'reset' buttons. 

startButton.addEventListener('click', startTimer);
