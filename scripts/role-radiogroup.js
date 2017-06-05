const radio = document.querySelectorAll(".radio");
let checked = false;
let lastChecked;

radio.forEach(r => r.addEventListener('click', function(ev) {
    radio.forEach(r => {
        r.setAttribute('aria-checked', false);
    });
    ev.target.setAttribute('aria-checked', true);
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
    const firstTabStopId = firstTabStop.getAttribute('data-id');
    const lastTabStop = radio[radio.length - 1];
    const lastTabStopId = lastTabStop.getAttribute('data-id');

    if(!checked) {
        checkRadiobutton(firstTabStop);
        checked = true;
    }
    
    else {
        if (key === 38) {
            // move up
            if(lastChecked.getAttribute('data-id') === firstTabStopId) {
                checkRadiobutton(lastTabStop);
            }
            else {
                const newId = parseInt(lastChecked.getAttribute('data-id')) - 1;
                let newChecked = document.querySelector('[data-id="' + newId + '"]');
                checkRadiobutton(newChecked);
            }
        }
 
        else if (key === 40) {
            // down arrow
            if(lastChecked.getAttribute('data-id') === lastTabStopId) {
                checkRadiobutton(firstTabStop);
            }
            else {
                const newId = parseInt(lastChecked.getAttribute('data-id')) + 1;
                let newChecked = document.querySelector('[data-id="' + newId + '"]');
                checkRadiobutton(newChecked);
            }
        }
    }   
}
function checkRadiobutton(el) {
    el.setAttribute('aria-checked', true);
    el.setAttribute('tabindex', '0');
    el.focus();
    lastChecked = el;
}