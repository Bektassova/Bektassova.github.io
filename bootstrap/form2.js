function validate() {
    let isValid = true;

    // Clear all previous error messages
    document.querySelectorAll(".error").forEach(error => (error.textContent = ""));

    // Validate First Name
    const firstName = document.getElementById("firstName").value.trim();
    if (!firstName) {
        document.getElementById("firstNameError").textContent ="Please enter First Name.";
        isValid = false;
    }

    // Validate Last Name
    const lastName = document.getElementById("lastName").value.trim();
    if (!lastName) {
        document.getElementById("lastNameError").textContent ="Please enter Last Name.";
        isValid = false;
    }

    // Validate Your Position
    const yourPosition = document.getElementById("yourPosition").value.trim();
    if (!yourPosition) {
        document.getElementById("yourPositionError").textContent ="Please enter your Position.";
        isValid = false;
    }

    // Validate Business Structure
    const gender = document.getElementById("gender").value;
    if (!gender) {
        document.getElementById("genderError").textContent ="Please select a Business Structure.";
        isValid = false;
    }

    // Validate Description
    const describing = document.getElementById("describing").value.trim();
    if (!describing) {
        document.getElementById("describingError").textContent ="Please describe what your company does.";
        isValid = false;
    }

    // Validate Country Location
    const located = document.getElementById("located").value.trim();
    if (!located) {
        document.getElementById("locatedError").textContent = "Please enter the country you are located in.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent ="Please enter a valid Email Address.";
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById("phone").value.trim();
    if (!phone || isNaN(phone)) {
        document.getElementById("phoneError").textContent ="Please enter a valid Phone Number.";
        isValid = false;
    }

    // Validate Link
    const link = document.getElementById("link").value.trim();
    if (!link) {
        document.getElementById("linkError").textContent ="Please add a website or social media link.";
        isValid = false;
    }

    return isValid; // If isValid is false, the form will not be submitted
}