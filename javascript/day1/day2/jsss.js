const mixedArray = [1, 'apple', 2, 'banana', 3, 'orange', 4, 'grape', 5];
const arr=mixedArray.filter(element => typeof element=== 'number');
const arr1=mixedArray.filter(element => typeof element=== 'string');
console.log("numbers");
arr.forEach(element=>{
    console.log(element);
}
);
console.log("string");
arr1.forEach(element=>{
    console.log(element);
}
);

