const toggleButton = document.getElementById('toggleButton');
const button = document.getElementById('button');

function toggleButtonHandler(ev) {
    let currentState = toggleButton.getAttribute('aria-pressed');
    let newState = currentState === 'true' ? 'false' : 'true';

    // toggle button if enter of space is pressed
    if(ev.keyCode === 13 || ev.keyCode === 32 || ev.type === 'click') {
        toggleButton.setAttribute('aria-pressed', newState);
    }
}

function buttonHandler(ev) {
    // if enter of space is pressed
    if(ev.keyCode === 13 || ev.keyCode === 32 || ev.type === 'click') {
        createAlert();
    }
}

function createAlert() {
    const newDiv = document.createElement("div"); 
    newDiv.className = "alert";
    newDiv.setAttribute('role', 'alert');
    const alertContent = document.createTextNode("Button pressed!"); 
    newDiv.appendChild(alertContent); 

    document.body.insertBefore(newDiv, buttonComponent); 
}

toggleButton.addEventListener("click", toggleButtonHandler, false);
toggleButton.addEventListener("keydown", toggleButtonHandler, false);
button.addEventListener("click", buttonHandler, false);
button.addEventListener("keydown", buttonHandler, false);