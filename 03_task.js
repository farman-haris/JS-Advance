/*
// ----------- Lec 12

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

*/


/*

// ----------- Lec 13

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 4, 19)
// let myCreatedDate = new Date(2024, 4, 23, 5, 3)
// let myCreatedDate = new Date("2024-05-19")
let myCreatedDate = new Date("2024-05-19")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDate()} and time`

newDate.toLocaleDateString('default', {
    weekday: "long"
})

*/


/*
// ----------- Lec 14

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2); 

*/

/*
// ----------- Lec 15

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

*/

/*
// ----------- Lec 16

//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Farman",
    "Full Name": "Farman Haris",
    [mySym]: "mykey1",
    email: "farmanharis66@gmail.com",
    age: 18,
    location: "Lahore",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "buffyboy327@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "buffyboy327@outlook.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

*/


/*
// ----------- Lec 17
// const timnderUser = new Object()
const timnderUser = {}

timnderUser.id = "123abc"
timnderUser.name = "Buffy"
timnderUser.isLoggedIn = false

// console.log(timnderUser);

const regularUser = {
    email: "farmanharis66@gmail.com",
    fullName: {
        userName: {
            firstName: "Farman",
            lastName: "Haris"
        }
    }
}

// console.log(regularUser.fullName.userName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email:"farmanharis66@gmail.com"
    },

    {
        id: 1,
        email:"farmanharis66@gmail.com"
    },

    {
        id: 1,
        email:"farmanharis66@gmail.com"
    }
]

user[1].email
console.log(timnderUser);
console.log(Object.keys(timnderUser));
console.log(Object.values(timnderUser));
console.log(Object.entries(timnderUser));

console.log(timnderUser.hasOwnProperty('isLoggedIn'));

*/



// ----------- Lec 17

const cource = {
    courseName: "JS Cource",
    price: "999",
    courseInstructor: "Hitesh"
}

// cource.courseInstructor

const {courseInstructor: teacher} = cource

console.log(teacher);

/*
const navbar = ({company}) => {

}

navbar(Company = "High4Tech")  */

// {
//     name: "Farman"
//     courseName: "Js Cource"
//     coursePrice: "Free"
// }