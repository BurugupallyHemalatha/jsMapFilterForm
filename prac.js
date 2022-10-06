const object = {
    name:"anusha",
    age:23,
    department:"Software"
}
const newObject = {}
Object.entries(object).forEach((arr)=>{
    let key=arr[0];
    let value=arr[1];
    newObject[value]=key
 }
)
console.log(newObject)




// const object = {name:"anusha", age:23}
// console.log(Object.values(object)[0] + ":"+ Object.keys(object)[0] + " " + Object.values(object)[1] + ":"+ Object.keys(object)[1])


// var obj = { first: 'someVal', second: 'otherVal' };
// alert(Object.keys(obj)[0]); // returns 'first'
// alert(Object.keys(obj)[1]); // returns 'second'

// const arr=["anu", "hema", ];
// let text = "";//we need a variable to dispaly data in the browser we need to store 
// for (const x of arr) {
//     text += x + " "
// }
// console.log(text);
// let data=[]//we have to push the numbers to this empty array
// for(i=0;i<=10;i++){
//     data.push(i)
// }
// console.log(data)




//sum(1)(2)(3)(4).....()
// let Sum =  function (a){
//     return function(b){
//        if(b){
//         return Sum(a + b)
//        }
//        return a
//     }
// }

// console.log(Sum(10)(1)(2)(3)(4)())
// let anu = function (a){
//     return function(b){
//         if(b!==undefined){
//             return anu(a + b)
//         }
//         return a
//     }
// }
// console.log(anu(7)(0)(9)(10)())