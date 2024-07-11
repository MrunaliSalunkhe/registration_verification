document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate Full Name
    var fullName = document.getElementById('fullName').value;
    if (!validateFirstName(fullName)) {
        alert("Invalid full name. It should be a maximum of 15 characters, start with a letter, and contain only letters.");
        return;
    }

    // Validate Email
    var email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert("Invalid email address. It should start with a letter, contain only letters, digits, dots, and one @ symbol, with no consecutive dots.");
        return;
    }

    // Validate Mobile Number
    var mobileNumber = document.getElementById('mobileNumber').value;
    if (!validateIndianMobileNumber(mobileNumber)) {
        alert("Invalid Indian mobile number. It should be exactly 10 digits, start with 6-9, and not contain repeating characters.");
        return;
    }

    // Validate Expiry Date
    var issuedDate = document.getElementById('issuedDate').value;
    var expiryDate = document.getElementById('expiryDate').value;
    if (!validateExpiryDate(issuedDate, expiryDate)) {
        alert("Expiry date should be after the issued date.");
        return;
    }

    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    this.submit();
});

function validateFirstName(firstName) {
    // Check for maximum length of 15 characters
    if (firstName.length > 15) {
        return false;
    }

    // Regular expression to match the pattern for valid first names
    var re = /^[a-zA-Z][a-zA-Z]*$/;

    // Check if the name matches the pattern
    return re.test(firstName);
}

function validateEmail(email) {
    var re = /^[a-zA-Z][a-zA-Z0-9._]*[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(String(email).toLowerCase())) {
        return false;
    }

    // Check for consecutive dots
    if (email.includes('..')) {
        return false;
    }

    return true;
}

function validateIndianMobileNumber(mobileNumber) {
    // Regular expression to match the pattern for Indian mobile numbers
    var re = /^[6-9]\d{9}$/;

    // Check if the number matches the pattern
    if (!re.test(mobileNumber)) {
        return false;
    }

    // Check for repeating characters
    var firstChar = mobileNumber[0];
    if (mobileNumber.split('').every(char => char === firstChar)) {
        return false;
    }

    return true;
}

function validateExpiryDate(issuedDate, expiryDate) {
    var issued = new Date(issuedDate);
    var expiry = new Date(expiryDate);
    return expiry > issued;
}
