const openModalBtn = document.getElementById("openModal");
const modalWindow = document.getElementById("modalWindow");
const modalOverlay = document.getElementById("modalOverlay");
let focusedElementBeforeModal;

function openModal() {
    modalWindow.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
    modalWindow.addEventListener('keydown', trapTabKey);

    // save current focus
    focusedElementBeforeModal = document.activeElement;

    // find focusable elements
    const focusableElementsString = 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])';
    let focusableElements = modalWindow.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    
    const firstTabStop = focusableElements[0];
    const lastTabStop = focusableElements[focusableElements.length - 1];

    // Focus first child
    firstTabStop.focus();

    function trapTabKey(e) {
        console.log("trapTabKey");
        // if TAB 
        if (e.keyCode === 9) {

            // SHIFT + TAB
            if (e.shiftKey) {
                if (document.activeElement === firstTabStop) {
                    e.preventDefault();
                    lastTabStop.focus();
                }

                // TAB
            } else {
                if (document.activeElement === lastTabStop) {
                    e.preventDefault();
                    firstTabStop.focus();
                }
            }
        }
    }
}

function closeModal() {
    modalWindow.classList.add("hidden");
    modalOverlay.classList.add("hidden");
    focusedElementBeforeModal.focus();
}

openModalBtn.addEventListener("click", openModal, false);
modalOverlay.addEventListener("click", closeModal, false);

