function sayMyName() {
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

/*function addTwoNo(No01, No02) {
    console.log(No01 + No02);     
}*/

function addTwoNo(No01, No02) {
    let result = No01 + No02;     
    return result;
}


const result = addTwoNo(3,5)

// console.log(`Result: ${result}`);

function loginUserMessage(username){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return`${username} just loggedin`
}

// console.log(loginUserMessage("Farman"))
console.log(loginUserMessage())