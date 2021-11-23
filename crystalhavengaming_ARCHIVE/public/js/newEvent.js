// Toggle between the basic and advanced job selections
let advancedFormSelector = document.querySelector("#advancedForm");

advancedFormSelector.addEventListener('change', function (event) {
    if (this.checked) {
        // If the user selected the advanced form
        document.querySelector('#choseSimpleForm').value = "0"
        document.querySelector('#simpleRoles').style.display = "none"
        document.querySelector('#advancedRoles').style.display = "block"
        document.querySelector('#jobChange').innerHTML = "Advanced Job Selection"

    } else {
        // If the user selected the simple form
        document.querySelector('#choseSimpleForm').value = "1"
        document.querySelector('#simpleRoles').style.display = "block"
        document.querySelector('#advancedRoles').style.display = "none"
        document.querySelector('#jobChange').innerHTML = "Simple roles"
    }




})

