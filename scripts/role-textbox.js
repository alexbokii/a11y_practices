const textboxInput = document.getElementById('textboxInput');
const textboxText = document.getElementById('textboxText');
const textboxBtn = document.getElementById('textboxBtn');

textboxBtn.addEventListener('click', function() {
    getTextboxValues();
});

function getTextboxValues() {
    let textboxInputContent = textboxInput.innerText;
    let textboxTextareaContent = textboxText.innerText;
    console.log("Value of the textbox: ", textboxInputContent, "Value of the textboxText: ", textboxTextareaContent);
}
