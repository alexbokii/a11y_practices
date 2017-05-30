const checkbox = document.querySelectorAll(".checkbox");

checkbox.forEach(cbox => cbox.addEventListener('click', function(ev) {
    changeCheckedState(ev.target);
}));

checkbox.forEach(cbox => cbox.addEventListener('keydown', function(ev) {
    // if space key
    if(ev.keyCode === 32) {
        changeCheckedState(ev.target);
    }
}));

function changeCheckedState(el) {
    let newState = el.getAttribute('aria-checked') === 'true' ? 'false' : 'true';
    el.setAttribute('aria-checked', newState);

    // add class to style checked state
    el.classList.toggle("checkbox-checked");
}


// Get values of checked checkboxes
const showCheckedBtn = document.getElementById('showCheckedBtn');
showCheckedBtn.addEventListener("click", getListOfCheckedCheckboxes, false);

function getListOfCheckedCheckboxes() {
    // get list of checked checkboxes
    let checkedCheckboxes = document.querySelectorAll('.checkbox[aria-checked=true]');

    // get list of values
    let checkedValues = [];
    for (let chBox of checkedCheckboxes) {
        checkedValues.push(chBox.getAttribute('data-value'));
    }

    alert(checkedValues);
}