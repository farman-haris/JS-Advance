/*
// ----------- Lec 02

function sayMyName() {
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

function addTwoNo(No01, No02) {
    console.log(No01 + No02);     
}

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

*/

// ----------- Lec 02

function calculateCartPrice(vsl01, vsl02, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: 'farman',
    price: 199
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

handleObject(user)


const myNewArray = [200, 400, 800]

function returnSecondVvalue(getArrayValue) {
    return getArrayValue[1]
}

console.log(returnSecondVvalue(myNewArray));