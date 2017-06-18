// 1. Grid list
const gridList = document.getElementById("gridlist");
const gridlistCell = document.querySelectorAll(".gridlist-cell");


gridlistCell.forEach(gc => gc.addEventListener('click', function(ev) {
    selectGridListCell(ev.target);
}));

gridlistCell.forEach(gc => gc.addEventListener('focus', function(ev) {
    selectGridListCell(ev.target);
}));

document.addEventListener('keydown', function(ev) {
    if(ev.keyCode >= 37 || ev.keyCode <= 40 && document.activeElement.classList.contains('gridlist-cell')) {
        findNeighbouringGridListCell(ev.keyCode);
    }
});

function findNeighbouringGridListCell(keyCode) {
    const firstGridlistCell = gridlistCell[0];
    const lastGridlistCell = gridlistCell[gridlistCell.length - 1];
    let activeElement = document.activeElement;

    if(keyCode === 37 || keyCode === 38) {
        // left
        if(activeElement === firstGridlistCell) {
            selectGridListCell(lastGridlistCell);
        }
        else {
            let currentFocusIndex = findIndexInNode(activeElement);
            let nextFocusIndex = currentFocusIndex - 1;
            selectGridListCell(gridlistCell[nextFocusIndex]);
        }

    }
    else if(keyCode === 39 || keyCode === 40) {
        // right
        if(activeElement === lastGridlistCell) {
            selectGridListCell(firstGridlistCell);
        }
        else {
            let currentFocusIndex = findIndexInNode(activeElement);
            let nextFocusIndex = currentFocusIndex + 1;
            selectGridListCell(gridlistCell[nextFocusIndex]);
        }

    }
}

function selectGridListCell(el) {
    gridlistCell.forEach(gc => gc.setAttribute('tabindex', '-1'));

    el.setAttribute('tabindex', '0');
    el.focus();
}

function findIndexInNode(el) {
    for (let i = 0; i < gridlistCell.length; i++) {
        if (gridlistCell[i] == el) {
            return i;
        }
    }
    return -1;
}
