const link = document.getElementById('roleLink');

function goToAddress(ev) {
    const url = 'https://en.wikipedia.org/wiki/WAI-ARIA';

    if(ev.type === 'click' || ev.keyCode === 13) {
        // open in the same tab
        window.location.href = url;

        // open in new tab
        window.open(url,'_blank');
    }
}

link.addEventListener("click", goToAddress, false);
link.addEventListener("keydown", goToAddress, false);