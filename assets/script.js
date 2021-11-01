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

    // validate password length. must be within a specified range
    // don't need to check if the argument contains non-integers because they will make the condition false anyway
    // if not within range, alert the user
    if (8 > passwordLength || passwordLength > 128) {
        window.alert("Invalid entry. Please try again.");
        // returning an empty string will not modify the password <textarea>
        return "";
    }

    // otherwise, continue with the function

    // character sets. start empty
    var passwordChars = "";

    // prompt user for each of character set
    // if user clicks OK, it returns true
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

    // if user cancels all the prompts, the passwordChars string remains blank
    // notify the user then cancel the operation
    if (passwordChars == "") {
        window.alert(
            "You haven't selected any of the options. Please try again."
        );
        return "";
    }

    // start building the output, one character at a time
    var passwordOutput = "";
    for (var i = 0; i < passwordLength; i++) {
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
