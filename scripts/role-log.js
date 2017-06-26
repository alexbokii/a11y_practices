const logBtn = document.getElementById('logBtn');
const userInput = document.getElementById('userInput');
const chat = document.getElementById("chat"); 
const chatStart = document.getElementById("chatStart"); 

logBtn.addEventListener('click', () => postToChat());

function postToChat() {
    let userMessage = userInput.value;
    userInput.value = '';
    createNewMessage(userMessage);
}

function createNewMessage(message) {
    // create user message
    let newMsg = createHTMLElement('div', message, 'user-msg');
    chat.insertBefore(newMsg, chatStart); 

    // create response 
    let response = createHTMLElement('div', message, 'response-msg'); 
    response.setAttribute('role', 'log'); 
    response.setAttribute('aria-live', 'polite'); 

    // use user input as response
    setTimeout(() => {
        chat.insertBefore(response, chatStart); 
    }, 2000);
}

function createHTMLElement(el, content, className) {
    let newEl = document.createElement(el); 
    let elContent = document.createTextNode(content); 
    newEl.classList.add(className);
    newEl.appendChild(elContent);

    return newEl;
}