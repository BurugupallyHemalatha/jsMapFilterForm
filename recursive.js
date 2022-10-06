//Javascript recursion. Recursion is a process of calling itself. A function that calls itself is a recursive 
//function

function countDown(number){
    //display the number
    console.log(number);
    const newNumber = number - 1
    if(newNumber>0){
       countDown(newNumber)
    }
}
//countDown(10);

function factorial(x){
    if(x===0){
        return 1;
    }else{
        return x * factorial(x-1)
    }      
}
const num = 4;

if(num>0){
    let result = factorial(num)
    console.log(result)
}

