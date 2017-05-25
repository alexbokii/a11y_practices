const startTimerBtn = document.getElementById('startTimer');
const alertComponent = document.getElementById('alertComponent');

function startTimer() {
    setTimeout(function(){
        createAlert();
    }, 5000);
}

function createAlert() {
    const newDiv = document.createElement("div"); 
    newDiv.className = "alert";
    newDiv.setAttribute('role', 'alert');
    const alertContent = document.createTextNode("Timer end!"); 
    newDiv.appendChild(alertContent); 

    document.body.insertBefore(newDiv, alertComponent); 
}

startTimerBtn.addEventListener("click", startTimer, false);