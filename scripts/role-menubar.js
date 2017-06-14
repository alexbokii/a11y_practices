const menubar = document.getElementById('menubar');
const menuitems = document.querySelectorAll('[role="menuitem"]');

menuitems.forEach(item => item.addEventListener('keydown', function(ev) {
    if(ev.keyCode === 37 || ev.keyCode === 39) {
        moveToTheNextMenuItem(ev.keyCode);
    }
}));

function moveToTheNextMenuItem(keyCode) {
    let currentFocusIndex = findIndexInNode(document.activeElement);
    if (! document.activeElement.classList.contains('menuitem')) {
        return;
    }

    if(keyCode === 37) {
        // move to the left
        if(currentFocusIndex === 0) {
            focusOnMenuItem(menuitems.length - 1);
        }
        else {
            focusOnMenuItem(currentFocusIndex - 1);
        }

    }

    else if(keyCode === 39) {
        // move to the right
        if(currentFocusIndex === menuitems.length - 1) {
            focusOnMenuItem(0);
        }
        else {
            focusOnMenuItem(currentFocusIndex + 1);
        }
    }
}

function focusOnMenuItem(index) {
    menuitems.forEach(i => {
        i.setAttribute('tabindex', '-1');
    });

    menuitems[index].focus();
    menuitems[index].setAttribute('tabindex', '0');
}

function findIndexInNode(el) {
    for (let i = 0; i < menuitems.length; i++) {
        if (menuitems[i] == el) {
            return i;
        }
    }
    return -1;
}