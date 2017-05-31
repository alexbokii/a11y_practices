const radio = document.querySelectorAll(".radio");
let checked = false;

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
    });

    if(!checked) {
        firstTabStop.setAttribute('aria-checked', true);
    }

    
    else {
        let focusedRadioId = parseFloat(document.activeElement.getAttribute('data-id'));
        let newRadio;

        const firstTabStop = radio[0];
        const firstTabStopId = firstTabStop.getAttribute('data-id');
        const lastTabStop = radio[radio.length - 1];
        const lastTabStopId = lastTabStop.getAttribute('data-id');

        console.log(firstTabStopId, lastTabStopId);

        if (key === 38) {
            // move down
            newRadioId = focusedRadioId - 1;
            newRadioId = newRadioId === lastTabStopId ? firstTabStopId : newRadioId;
        }
        else {
            // move up
            newRadioId = focusedRadioId + 1;
            newRadioId = newRadioId === firstTabStopId ? lastTabStopId : newRadioId;
        }

        document.querySelector('[data-id="' + newRadioId + '"]').setAttribute('aria-checked', true);
    }   
}