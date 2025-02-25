const accountid = 4556
let accountEmail="harshiitian123@gmail.com"
var accountPassword="malviyan#12@"

console.table([accountid,accountEmail,accountPassword])

/* let and const use karo hamesha prefer not to used var*/
// typecast
let number = "44"  // this is a string 
console.log(typeof number);

// now convert it into number by typecasting

let valueNumber=Number(number);
console.log(typeof number);

//"44" --> 44
//44abc --> NaN
//true -->1

let isLoggedin = "1"

let booleanisLoggedin=Boolean(isLoggedin);
console.log(booleanisLoggedin);                         // output is "true"


// some more boolean conversions

// 1 --> true
// ""(empty) --> false
//"harsh" --> true


// Conversions into strings

let someNumber=55
let stringNumber=String(someNumber)

console.log(typeof stringNumber)