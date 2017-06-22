const tabs = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tabpanel');

// select tab on click
tabs.forEach(tab => tab.addEventListener('click', function(ev) {
    selectTab(ev.target);
}));

// select tab on focus
tabs.forEach(tab => tab.addEventListener('focus', function(ev) {
    selectTab(ev.target);
}));

// select tab by arrow keys
document.addEventListener('keydown', function(ev) {
    // if left or right arrow we should move between tabs
    if(ev.keyCode === 37 || ev.keyCode === 39 && document.activeElement.classList.contains('tab')) {
        findNextTab(ev.keyCode);
    }   
});

function findNextTab(keyCode) {
    let currentActiveIndex = findElIndexInNodeList(document.activeElement);
    let newIndex;

    if(keyCode === 37) {
        newIndex = currentActiveIndex === 0 ? tabs.length - 1 : currentActiveIndex - 1;
    }
    else if(keyCode === 39) {
        newIndex = currentActiveIndex === (tabs.length - 1) ? 0 : currentActiveIndex + 1;
    }

    selectTab(tabs[newIndex]);
}

function findElIndexInNodeList(el) {
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] == el) {
            return i;
        }
    }
    return -1;
}

function selectTab(el) {
    // make all other tabs and tabpanels inactive
    tabs.forEach(tab => tab.setAttribute('aria-selected', 'false'));
    tabPanels.forEach(panel => panel.setAttribute('aria-hidden', 'true'));

    // make a selected tab active
    el.setAttribute('aria-selected', 'true');
    el.focus();

    let tabPanelId = el.getAttribute('aria-controls');
    document.getElementById(tabPanelId).setAttribute('aria-hidden', 'false');
}