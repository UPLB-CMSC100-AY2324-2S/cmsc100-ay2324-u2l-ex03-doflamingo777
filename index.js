// CAMARA, Joenzsen Jonner H.
// CMSC 100 - U2L

const pass1 = "jonner55"
const pass2 = "jonner55"
const username = "John"

// This function checkes if the 2 passwords matches
function checkIfMatch(pass1, pass2) {
    const str1 = pass1;
    const str2 = pass2;

    // Each letter are stored and is seperated by '' 
    let strArray = [];
    strArray = str1.split('');

    // console.log(typeof strArray[5]);
    // console.log(typeof strArray.length);

    // The passswords will also be replaced with all caps
    // and with all low caps.
    let testStr1 = pass1.toLowerCase();
    let testStr2 = pass1.toUpperCase();

    // checker in order to know if there is a number
    // in the user's password
    let checkNum = false;

    // checks each element in the array
    // checkNum will become true if there is  
    for (let i = 0; i < strArray.length; i++) {
        // console.log(i);
        if (!isNaN(parseInt(strArray[i]))) {
            checkNum = true;
            // console.log("End");
            // console.log(checkNum);
            break;
        }
    }

    // console.log(checkNum);

    // If the 2 passwords doesnt match
    // and if the password is less than 8 char long
    // and if there is no number or no upper or lower cased letters
    // then return false, else return true
    if (str1 != str2) {
        return false;
    } else if (str1.length < 8) {
        return false;
    } else if (testStr1 === str1 || testStr2 === str1) {
        return false;
    } else if (checkNum == false) {
        return false;
    } else if (str1 === str2 && str1.length >= 8 && testStr1 != str1) {
        return true;
    } else {
        console.log("Error Occured");
        return false;
    }
}

// Reverse the password
function reversePass(pass1) {
    // const str1 = pass1;

    // // split again into an array
    // let strArray = [];
    // strArray = str1.split('');

    // // use reverse to reverse the Array
    // // usse .join('') to join characters that are 
    // // seperated by '', and toString in order to turn
    // // the array into a character
    // let revArray = strArray.reverse();
    // let newString = revArray.join('').toString();

    // return newString;

    // ================================================s

    // Creates an empty array to store all characters
    const str1 = pass1;
    let strArray = [];
    // console.log(strArray);


    for (let i = 0; i < str1.length; i++) {
        strArray.push(str1[i]);
        // console.log(strArray);
    }

    // console.log("revArray");
    // creates revArray to store characters using .push
    // in order to reverse the passwordd
    let revArray = [];
    // console.log(revArray);


    while (strArray.length > 0) {
        revArray.push(strArray.pop());
        // console.log(revArray);
    }

    // use .join to turn the array into string
    let newString = revArray.join('');
    // console.log(newString);
    
    return newString;
}

// main fucntion to check if it is validd
function toObject(name, pass1, pass2) {

    let passTest = checkIfMatch(pass1, pass2);
    let testStr1 = pass1.toLowerCase();
    let testStr2 = pass1.toUpperCase();


    // if checkIfMatch returns true, return the object person
    // else return false
    if (passTest == true) {
        let newPass = reversePass(pass1);

        const person = {
            name: name,
            newPassword: newPass
        }

        return person;
    } else if (pass1.length < 8 && passTest == false) {
        console.log("Insufficient Number of Strings!");
        return false;
    } else if ((testStr1 === pass1 || testStr2 === pass1) && passTest == false) {
        console.log("Invalid Password!");
        return false;
    } else {
        console.log("Wrong Password!");
        return false;
    }
}

// the main function is called here as well as its 3 parameters
let person = toObject(username, pass1, pass2);

// if person is not false, then print person.
if (person != false) {
    console.log(person);
}