// object containing all the character types the user may choose to include in the password
var charSets = {
    integer: "0123456789",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special: "~!@#$%^&*()_+{}|:\"<>?`-=[]\\;',./ ", // use backslash \ to escape the tricky characters
};

// generator
function generatePassword() {
    // prompt user to enter a desired length of the password
    var passwordLength = window.prompt(
        "Enter the length of the password. Must be a number from 8 to 128."
    );

    // validate password length. must be a number and within a specified range
    // note that isNaN() has limitations. fortunately they don't apply here
    if (isNaN(passwordLength) || 8 > passwordLength || passwordLength > 128) {
        // if invalid, alert the user
        window.alert("Invalid entry. Please try again.");
        // returning an empty string will reset the password <textarea> to default placeholder
        return "";
    }

    // otherwise, continue with the function

    // available characters to use. start empty
    var passwordChars = "";

    // prompt user for each of character set
    // if user clicks OK, it returns true
    // concat the character set to the variable so it can be used later
    if (
        window.confirm(
            "Include NUMBERS in the password?\n\nexample: " + charSets.integer
        )
    ) {
        passwordChars += charSets.integer;
    }
    if (
        window.confirm(
            "Include LOWERCASE letters in the password?\n\nexample: " +
                charSets.lowercase
        )
    ) {
        passwordChars += charSets.lowercase;
    }
    if (
        window.confirm(
            "Include UPPERCASE letters in the password?\n\nexample: " +
                charSets.uppercase
        )
    ) {
        passwordChars += charSets.uppercase;
    }
    if (
        window.confirm(
            "Include SPECIAL characters in the password?\n\nexample: " +
                charSets.special
        )
    ) {
        passwordChars += charSets.special;
    }

    // at least one character set must be selected
    // if user cancels all the prompts, the passwordChars string remains blank
    // notify the user then cancel the operation
    if (passwordChars == "") {
        window.alert(
            "You haven't selected any of the options. Please try again."
        );
        return "";
    }

    // if we made it this far,
    // the user should have entered a valid password length and selected at least one of the character sets

    // start building the output, one character at a time until it reaches the desired length
    var passwordOutput = "";
    while (passwordOutput.length < passwordLength) {
        // randomly select an index in the passwordChars
        var randomIndex = Math.floor(Math.random() * passwordChars.length);
        // then concat that to the output string
        passwordOutput += passwordChars[randomIndex];
    }
    return passwordOutput;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
