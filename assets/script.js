// object containing all the character types the user may choose to include in the password
var charSets = {
    integer: Array.from("0123456789"),
    lowercase: Array.from("qwertyuiopasdfghjklzxcvbnm"),
    uppercase: Array.from("QWERTYUIOPASDFGHJKLZXCVBNM"),
    special: Array.from("~!@#$%^&*()_+{}|:\"<>?`-=[]\\;',./"), // use backslash \ to escape the tricky characters
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

    // character sets array
    var passwordChars = [];
    // for now let's just use all the character sets
    passwordChars = passwordChars.concat(
        charSets.integer,
        charSets.lowercase,
        charSets.uppercase,
        charSets.special
    );

    // start building the output, one character at a time
    var passwordOutput = "";
    for (var i = 0; i < passwordLength; i++) {
        // randomly select an index in the passwordChars array
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
