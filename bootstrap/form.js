function validate() {
    let isValid = true;

    // Clear all previous error messages
    document.querySelectorAll(".error").forEach(error => (error.textContent = ""));

    // First Name Validation
    const firstName = document.getElementById("firstName").value.trim();
    if (!firstName) {
        document.getElementById("firstNameError").textContent = "Please enter First Name.";
        isValid = false;
    }

    // Last Name Validation
    const lastName = document.getElementById("lastName").value.trim();
    if (!lastName) {
        document.getElementById("lastNameError").textContent = "Please enter Last Name.";
        isValid = false;
    }

    // Age Group Validation
    const ageGroup = document.querySelector('input[name="age"]:checked');
    if (!ageGroup) {
        document.getElementById("ageGroupError").textContent = "Please select your age.";
        isValid = false;
    }

    // Gender Validation
    const gender = document.getElementById("gender").value.trim();
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your Gender.";
        isValid = false;
    }

    // Current Nationality Validation
    const nationality = document.getElementById("nationality").value.trim();
    if (!nationality) {
        document.getElementById("nationalityError").textContent = "Please enter Current Nationality.";
        isValid = false;
    }

    // Birth Nationality Validation
    const birthNationality = document.getElementById("birthnationality").value.trim();
    if (!birthNationality) {
        document.getElementById("birthnationalityError").textContent = "Please enter Birth Nationality.";
        isValid = false;
    }

    // Country of Birth Validation
    const birthCountry = document.getElementById("birthcountry").value.trim();
    if (!birthCountry) {
        document.getElementById("errorBirthcountry").textContent = "Please enter Country of Birth.";
        isValid = false;
    }

    // Located Country Validation
    const locatedCountry = document.getElementById("located").value.trim();
    if (!locatedCountry) {
        document.getElementById("errorLocatedcountry").textContent = "Please enter the Country you are Located in.";
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    if (!email) {
        document.getElementById("errorEmail").textContent = "Please enter an Email Address.";
        isValid = false;
    }

    // Phone Number Validation
    const phone = document.getElementById("phone").value.trim();
    if (!phone) {
        document.getElementById("phoneError").textContent = "Please enter a Phone Number.";
        isValid = false;
    }

    // Local Phone Number Validation
    const localPhone = document.getElementById("loacalphone").value.trim();
    if (!localPhone) {
        document.getElementById("loacalphoneError").textContent = "Please enter a Local Phone Number.";
        isValid = false;
    }

    // Job Applying For Validation
    const applying = document.getElementById("applying").value.trim();
if (!applying || applying === "default") {
    document.getElementById("applyingError").textContent = "Please select a Job Sector & Discipline.";
    isValid = false;
}

    // CV Upload Validation
    const cvUpload = document.getElementById("cvUpload").files.length;
    if (!cvUpload) {
        document.getElementById("cvUploadError").textContent = "Please upload your CV.";
        isValid = false;
    }

    return isValid;
}
