const statusBtn = document.getElementById('statusBtn');
const statusResult = document.getElementById('statusResult');
const status = document.getElementById('status');

statusBtn.addEventListener('click', function() {createAlert()});

function createAlert() {
    let timerCount = 0;
    
    let timer = setInterval(function() {
        timerCount = timerCount + 2;
        updateStatus(timerCount);
        timerCount >= 10 ? endTimer(timer) : null;
    }, 2000);
}

function updateStatus(timerCount) {
    let statusText = timerCount < 10 ? `${10 - timerCount} seconds remaining` : "Stop timer";
    status.innerHTML = statusText;
}

function endTimer(timer) {
    clearInterval(timer);
    statusResult.innerHTML = "Alert!";
}