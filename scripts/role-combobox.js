const listbox = document.getElementById('owned_listbox');
const combobox = document.getElementById('combobox');
const listOptions = document.querySelectorAll('[role="option"]');
const comboboxBtn = document.getElementById('comboboxBtn');
let selectedListElement;

// open/close list
comboboxBtn.addEventListener('click', function() {
    showListOptions();
});

function showListOptions() {
    listbox.classList.contains('hidden') ? listbox.classList.remove('hidden') : listbox.classList.add('hidden');
}
 
// update combobox value - initially it's the first option
updateSelected(0);

// update combobox value
function updateSelected(index) {
    selectedListElement = index;
    combobox.value = listOptions[index].innerHTML;
    showSelectedInList(index);
}

// move throughout the list on keydown
document.addEventListener('keydown', function(ev) {
    if(ev.keyCode === 38) {
        moveInList('up');
    }

    else if(ev.keyCode === 40) {
        moveInList('down');
    }
});

function moveInList(direction) {
    if(direction === 'up') {
        selectedListElement === 0 ? updateSelected(listOptions.length - 1) : updateSelected(selectedListElement - 1);
    }

    else if(direction === 'down') {
        selectedListElement === listOptions.length - 1 ? updateSelected(0) : updateSelected(selectedListElement + 1);
    }
}

function showSelectedInList(index) {
    listOptions.forEach(o => {
        o.setAttribute('tabindex', '-1');
    });

    listOptions[index].setAttribute('tabindex', '0');
    listOptions[index].focus();
}

/* ToDo - input value - disable editing  */

