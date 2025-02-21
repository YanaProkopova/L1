const sumThreeNumbers=(a: number, b: number, c: number): number => {
    return a + b + c;
};
console.log(sumThreeNumbers(1, 2, 3));


const numberConst = 42; 
const stringConst = "Hello, World!"; 
const booleanConst = true; 
const arrayConst = [1, 2, 3, 4, 5]; 
const objectConst = { name: "Yana", age: 19 }; 


let numberVar = 3.14; // 
let stringVar = "Hello"; // 
let booleanVar = false; 



const data = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
};

const jsonString = JSON.stringify(data);
console.log(jsonString);
