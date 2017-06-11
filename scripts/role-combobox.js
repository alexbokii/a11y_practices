const listbox = document.getElementById('owned_listbox');
const combobox = document.getElementById('combobox');
const listOptions = document.querySelectorAll('[role="option"]');
let selectedListElement;

// Open listbox on click or on focus
combobox.addEventListener('focus', function() {
    listbox.classList.remove('hidden');
});

// SelectListElement from the listbox
listOptions.forEach(option => option.addEventListener('click', function(ev) {
   useListOption(ev.target);
}));

function useListOption(el) {
    el.setAttribute('id', 'selectedOption');
    combobox.value = el.innerText;
}

// Move upward/downward in list
document.addEventListener('keydown', function(ev) {
    if(ev.keyCode === 38 || ev.keyCode === 40) {
        moveInList(ev.keyCode);
    }
});

function moveInList(keyCode) {
    const firstOption = listOptions[0];
    const lastOption = listOptions[listOptions.length - 1];

    // if combobox value is empty focus on first option
    if(!selectedListElement) {
        focusElementInList(firstOption);
        return;
    }

    let selectedId = findIndexInNode(selectedListElement);

    if(keyCode === 38) {
        // up
        selectedListElement === firstOption ? focusElementInList(lastOption) : focusElementInList(listOptions[selectedId - 1]);
    }
    else {
        // down
        selectedListElement === lastOption ? focusElementInList(firstOption) : focusElementInList(listOptions[selectedId + 1]);
    }
}

function focusElementInList(el) {
    listOptions.forEach(o => {
        o.setAttribute('tabindex', '-1');
    });

    el.setAttribute('tabindex', '0');
    el.focus();
    selectedListElement = el;
}

function findIndexInNode(el) {
    for (let i = 0; i < listOptions.length; i++) {
        if (listOptions[i] == el) {
            return i;
        }
    }
    return -1;
}
