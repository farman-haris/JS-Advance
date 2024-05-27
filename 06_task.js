/*
// ----------- Lec 27

// for loop
for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


//Break
for (let index = 0; index < 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}

//Countinue
for (let index = 0; index < 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}

*/



/*
// ----------- Lec 28

//whilw & do while loop

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`)
    index = index + 2
}

let myArray = ["flash", "Batman", "Superman"]

let arr =0;
while (arr< myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

//do while loop

let score = 1
do{
    console.log(`Score is ${score}`)
    score++;
} while (score <= 10)

*/

/*
// ----------- Lec 29


// for-off loop
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each charector is ${greetings}`);
}



//Maps

const map = new Map();
map.set('Pak', "Pakistan")
map.set('In', "India")
map.set('Uk', "United Kingdom")

// console.log(map); 

for (const [key, value] of map) {
    console.log(key, ':-', value);
}



const myObj = {
    'game01' : 'NFS',
    'game02' : 'Fortknight',
    'game03' : 'GTA 5'
}

for (const [key,value] of myObj) {
    console.log(key, ':-', value);
}


const myObj = {
    js: 'javascript',
    cpp: 'Cpp',
    rb: 'Ruby',
    swift: 'Swift by apple',
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const myArr = ["js", "rb", "py", "java", "cpp"]

for (const key in myArr) {
    console.log(`My array includes ${myArr[key]}`);
}

*/

//For each loop

const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach((val) => {
    console.log(val);
})