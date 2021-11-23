const spinner = document.getElementById("spinner");
const spinnerBackDrop = document.getElementById('spinnerBackdrop');

const showSpinner = () => {
    spinner.className = "show";
    spinnerBackDrop.className = "show";
}

// Add listener to forms that need a spinner
document.querySelectorAll(".getSpinner").forEach(item => {
    item.addEventListener('submit', function (event) {
        showSpinner();
    }, false)
})

// Add listener to buttons that need a spinner
document.querySelectorAll(".navSpinner").forEach(item => {
    item.addEventListener('click', function (event) {
        showSpinner();
    }, false)
})