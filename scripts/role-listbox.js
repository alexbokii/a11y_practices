const listbox = document.getElementById('listbox');
const options = document.querySelectorAll('.listbox-option');

// select option on Enter key event
options.forEach(opt => opt.addEventListener('click', function(ev) {
   selectOption(ev.target);
}));

// move focus in the option list or select
options.forEach(opt => opt.addEventListener('keydown', function(ev) {
    if(ev.keyCode === 38 || ev.keyCode === 40) {
        if(document.activeElement.classList.contains('listbox-option')) {
            goToNextOption(ev.target, ev.keyCode);
        }
    }
    if(ev.keyCode === 13) {
        if(document.activeElement.classList.contains('listbox-option')) {
            selectOption(ev.target);
        }
    }
}));

function goToNextOption(el, key) {
    let currentlyActiveIndex = findElIndexInNodeList(el);
    let firstOptionInList = options[0];
    let lastOptionInList = options[options.length - 1];

    // next option up
    if(key === 38) {
        currentlyActiveIndex === 0 ? focusOnOption(lastOptionInList) : focusOnOption(options[currentlyActiveIndex - 1]);
    }

    // next option down
    else if(key === 40) {
        currentlyActiveIndex === (options.length - 1) ? focusOnOption(firstOptionInList) : focusOnOption(options[currentlyActiveIndex + 1]);
    }
}

// move focus to the next option
function focusOnOption(el) {
    options.forEach(o => o.setAttribute('tabindex', '-1'));
    el.setAttribute('tabindex', '0');
    el.focus();
}

function selectOption(el) {
    focusOnOption(el);
    let selected = el.getAttribute('aria-selected');
    let newSelected = selected === 'true' ? false : true;
    el.setAttribute('aria-selected', newSelected);
}

function findElIndexInNodeList(el) {
    for (let i = 0; i < options.length; i++) {
        if (options[i] == el) {
            return i;
        }
    }
    return -1;
}


