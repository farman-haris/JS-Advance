/*
// ----------- Lec 19

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

/*
// ----------- Lec 20

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

*/


/*
// ----------- Lec 21

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

*/

/*
// ----------- Lec 23

// const user = {
//     username: "farman",
//     price: 99,

//     welcomeMessage: function() {
//         console.log(`${this.username} welcome to website`);
//         console.log(this)
//     }
    
// }

// user.welcomeMessage();
// user.username  = "Haris"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


*/


/*
// ----------- Lec 24

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

*/