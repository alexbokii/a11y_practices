const treeitems = document.querySelectorAll('.treeitem');

treeitems.forEach(item => addEventListener('click', function(ev) {
    expandTreeitem(ev.target);
}));

treeitems.forEach(item => addEventListener('keydown', function(ev) {
    if(ev.keyCode === 13 && document.activeElement.classList.contains('treeitem')) {
        expandTreeitem(ev.target);
    }
}));

// move focus within tree
document.addEventListener('keydown', function(ev) {
    if(ev.keyCode === 38 || ev.keyCode === 40 && document.activeElement.classList.contains('treeitem')) {
        moveFocusInTree(ev.keyCode);
    }
});

function expandTreeitem(el) {
    let ulGroup = el.querySelector('ul');

    // change treeitem attributes
    let isExpanded = el.getAttribute('aria-expanded');
    isExpanded === 'true' ? el.setAttribute('aria-expanded', 'false') : el.setAttribute('aria-expanded', "true");

    // change subitems  attribute
    let isHidden = ulGroup.getAttribute('aria-hidden');
    isHidden === 'true' ? ulGroup.setAttribute('aria-hidden', 'false') : ulGroup.setAttribute('aria-hidden', "true");
}

function moveFocusInTree(keyCode) {
    let activeIndex = findElIndexInNodeList(document.activeElement);
    let newfocusIndex;
    // move up
    if(keyCode === 38) {
        newfocusIndex = activeIndex === 0 ? (treeitems.length - 1) : (activeIndex - 1);
    }
    // move down
    else if (keyCode === 40) {
        newfocusIndex = activeIndex === (treeitems.length - 1) ? 0 : (activeIndex + 1);
    }

    focusOnTreeitem(newfocusIndex);
}

function focusOnTreeitem(index) {
    treeitems[index].focus();
}

function findElIndexInNodeList(el) {
    for (let i = 0; i < treeitems.length; i++) {
        if (treeitems[i] == el) {
            return i;
        }
    }
    return -1;
}