const startBtn = document.getElementById('timerBtn');
const timerMsg = document.getElementById('timerMsg');
const seconds = document.getElementById('seconds');
let remaining = 0;

startBtn.addEventListener('click', () => setAlarm());

function setAlarm() {
    let time = parseInt(seconds.value);

    let interval = setInterval(() => {
        remaining = remaining + 1;
        if(time > remaining) {
            updateRemaining(time);
        }
        else {
            updateRemaining(0);
            clearInterval(interval);
        }
        
    }, 1000);
}

function updateRemaining(time) {
    timerMsg.innerHTML = time === 0 ?  "End" : `${time - remaining} seconds remaining`;
}