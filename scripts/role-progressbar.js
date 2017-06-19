const progressbar = document.getElementById('progressbar');
const progressBtn = document.getElementById('progressBtn');
const progressDivEl = document.getElementById('progressbar-outher');

progressBtn.addEventListener('click', function() {
    runProgress();
});

function runProgress() {
    setInterval(function() {
        if(parseInt(progressbar.getAttribute('aria-valuenow')) <= parseInt(progressbar.getAttribute('aria-valuemax'))) {
            let currentProgress = progressbar.getAttribute('aria-valuenow');
            currentProgress = parseInt(currentProgress);
            progressbar.setAttribute('aria-valuenow', currentProgress + 1);
            showProgress(currentProgress + 1);
        }
        else {
            console.log("Timer");
        }
    }, 1000);
}

function showProgress(progresCurrentValue) {
    let progressMax = progressbar.getAttribute('aria-valuemax');
    progressMax = parseInt(progressMax, 10)

    let progressInDecimal = parseInt(progressMax) / progresCurrentValue;
    let progrressInPercentage = progressMax / progressInDecimal;
   
    progressDivEl.setAttribute("style", "width:" + progrressInPercentage + "%");
}