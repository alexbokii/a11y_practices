const startTimerBtn = document.getElementById('startTimer');
const alertComponent = document.getElementById('alertComponent');
const modalWindow = document.getElementById("modalWindow");
const modalOverlay = document.getElementById("modalOverlay");

function startTimer() {
    setTimeout(function(){
        createAlertdialog();
    }, 5000);
}

function createAlertdialog() {
    // alert
    const newDiv = document.createElement("div"); 
    newDiv.className = "alert";
    newDiv.setAttribute('role', 'alertdialog');
    newDiv.setAttribute('aria-describedby', 'dialogText');
    newDiv.setAttribute('aria-labelledby', 'dialogTitle');

    const dialogTitle = document.createElement("div"); 
    dialogTitle.setAttribute('id', 'dialogTitle');
    const dialogTitleContent = document.createTextNode("Your personal details were successfully updated"); 
    dialogTitle.appendChild(dialogTitleContent); 
    

    const newDivDocument = document.createElement("div"); 
    newDivDocument.setAttribute('role', 'document');
    newDivDocument.setAttribute('tabindex', '0');

    const p = document.createElement("p"); 
    p.setAttribute('id', 'dialogText');
    const dialogText = document.createTextNode("Your session is about to expire. Click OK to continue"); 
    p.appendChild(dialogText); 

    const button = document.createElement("button"); 
    button.className = "btn";
    button.setAttribute('id', 'dialogButton');
    const btnText = document.createTextNode("OK"); 
    button.appendChild(btnText); 

    newDiv.appendChild(newDivDocument); 
    newDivDocument.appendChild(dialogTitle); 
    newDivDocument.appendChild(p); 
    newDivDocument.appendChild(button); 


    openModal(newDiv);
}

function openModal(alertElement) {
    modalWindow.appendChild(alertElement); 
    modalWindow.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");

    const dialogButton = document.getElementById("dialogButton");
    dialogButton.focus();
}

startTimerBtn.addEventListener("click", startTimer, false);