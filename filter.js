const arr=[5,1,3,2,6];

// filter odd values
function isOdd(x){
    return x % 2;
}
function isEven(x){
    return x % 2 ===0;
}
function isGreaterthanFour(x){
    return x>4;
}
const output = arr.filter( (x)=>  x>4);
console.log(output)