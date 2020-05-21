window.onload = function() {
    //change our page header
    let header = document.getElementsByTagName("h1")[0];
    header.textContent = "Registration Form";

    //let the user know when the form is done!
    let button = document.querySelector("button");
    button.onclick = function(event) {
        event.preventDefault();
        alert("User registered!")
    }

    //set the class for elements that have been visited
    let formElements = document.querySelectorAll("input, select");
    for (let i = 0; i < formElements.length; i++)
    {
        let element = formElements[i];
        element.onfocus = function(event) {
            element.classList.add("shine");
        };

        element.onblur = function(event) {
            element.classList.remove("shine");
        };
    }

    //add a darker border to form elements on mouse over
    formElements = document.querySelectorAll("input, select");
    for (let i = 0; i < formElements.length; i++)
    {
        let element = formElements[i];
        element.onmouseenter = function(event) {
            element.style.border = "2px solid black";
        };

        element.onmouseleave = function(event) {
            element.style.border = "1px solid black";
        };
    }
};

