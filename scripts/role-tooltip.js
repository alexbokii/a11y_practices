const tooltipContainer = document.querySelectorAll('.tooltip-container');
const tooltip = document.querySelectorAll('.tooltip');

// show tooltip on hover or on focus

tooltipContainer.forEach(tooltip => tooltip.addEventListener('mouseover', function(ev) {
    toggleVisibility(ev.target, false);
}));

tooltipContainer.forEach(tooltip => tooltip.addEventListener('focus', function(ev) {
    toggleVisibility(ev.target, false);
}));


// hide tooltip on mouseleave or on blur

tooltipContainer.forEach(tooltip => tooltip.addEventListener('mouseleave', function(ev) {
    toggleVisibility(ev.target, true);
}));

tooltipContainer.forEach(tooltip => tooltip.addEventListener('blur', function(ev) {
    toggleVisibility(ev.target, true);
}));

function toggleVisibility(el, isVisible) {
    let tooltipContent = el.querySelector('.tooltip');
    isVisible ? 
        setTimeout(() => {tooltipContent.setAttribute('aria-hidden', isVisible)}, 300):
        setTimeout(() => {tooltipContent.setAttribute('aria-hidden', isVisible)}, 1000) 
}