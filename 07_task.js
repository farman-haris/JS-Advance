/*
// ----------- Lec 30


const codinng = ["js", "py", "cpp", "Java", "Swift"];

const value = codinng.forEach((item) => {
    // console.log(item);
    return item;
})

console.log(value);


const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num) => num > 4)
const newNum = myNum.filter((num) =>{
    return num > 4;
})
console.log(newNum);


const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = [];
myNum.forEach((num) =>{
    if (num > 4) {
        newNum.push(num)
    }
})

console.log(newNum);
*/