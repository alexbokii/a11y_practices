const radio = document.querySelectorAll(".radio");
let checked = false;
let lastChecked;

radio.forEach(r => r.addEventListener('click', function(ev) {
    radio.forEach(r => {
        r.setAttribute('aria-checked', false);
    });
    checkRadiobutton(ev.target);
}));

radio.forEach(r => r.addEventListener('keydown', function(ev) {
    // if space key
    if(ev.keyCode === 38 || ev.keyCode === 40) {
        changeRadio(ev.target, ev.keyCode);
    }
}));

function changeRadio(el, key) {
    radio.forEach(r => {
        r.setAttribute('aria-checked', false);
        r.setAttribute('tabindex', '-1');
    });

    const firstTabStop = radio[0];
    const lastTabStop = radio[radio.length - 1];
    let indexOfCurrentlyChecked = findIndexInNode(lastChecked);

    if(!checked) {
        checkRadiobutton(firstTabStop);
    }
    
    else {
        if (key === 38) {
            // move up
            lastChecked === firstTabStop ? checkRadiobutton(lastTabStop) : checkRadiobutton(radio[indexOfCurrentlyChecked - 1]);
        }
 
        else if (key === 40) {
            // down arrow
            lastChecked === lastTabStop ? checkRadiobutton(firstTabStop) : checkRadiobutton(radio[indexOfCurrentlyChecked + 1]);
        }
    }   
}
function checkRadiobutton(el) {
    el.setAttribute('aria-checked', true);
    el.setAttribute('tabindex', '0');
    el.focus();
    lastChecked = el;
    checked = true;
}

function findIndexInNode(el) {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i] == el) {
            return i;
        }
    }
    return -1;
}