const requestForm = document.getElementById("request-form");
const requiredFields = ["name", "email", "interest", "experience", "contact", "message"];

function validateField(fieldId) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "-error");
    let message = "";

    if (input.value.trim() === "") {
        message = "Please fill out this field.";
    } else if (fieldId === "email" && input.validity.typeMismatch) {
        message = "Please enter a valid email address.";
    }

    error.textContent = message;

    if (message !== "") {
        input.setAttribute("aria-invalid", "true");
        return false;
    }

    input.removeAttribute("aria-invalid");
    return true;
}

requiredFields.forEach(function (fieldId) {
    const input = document.getElementById(fieldId);
    input.addEventListener("blur", function () {
        validateField(fieldId);
    });
});

requestForm.addEventListener("submit", function (event) {
    let formIsValid = true;

    requiredFields.forEach(function (fieldId) {
        if (!validateField(fieldId)) {
            formIsValid = false;
        }
    });

    if (!formIsValid) {
        event.preventDefault();
    }
});
