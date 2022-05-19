//--------------------------------------------------------------------
//การแสดงผลต่างๆ
document.write("<br>");
document.write("<h1>Test 2</h1>");
document.write("<p>Javascript เบื้องต้น</p>");

alert("Test Test.");

console.log("Hello World");
console.error("Error");
console.warn("Warning");
//--------------------------------------------------------------------
//Comment
// บรรทัดเดียว

/*
หลาย
หลาย
บรรทัด
*/
//--------------------------------------------------------------------
//Defined Variables
const MONEY = 100; //เปลี่ยนแปลงค่าไม่ได้ พิมพ์ใหญ่
let money2;
money2 = 200; //เปลี่ยนแปลงค่าได้ พิมพ์เล็ก
console.log(MONEY+money2);

let x = 10, y= 20, z = 30;
console.log(x+y+z);
//--------------------------------------------------------------------
// Data Type
let stat = true; //boolean status
console.log(typeof(stat));
let nb = 28, db = 30.15; // number integer, number float
console.log(typeof nb);
console.log(typeof db);
let str = `Tossaphon age = ${nb}`; // string
console.log(str)
console.log(typeof str);
let obj = {fName:"Tossaphon", lName:"Phophan"}; // object
console.log(typeof obj);
console.log("First Name = "+obj.fName);
console.log("Last Name = "+obj.lName);
let arr = [10,20,30,40]; // array, or = Array(10,20,30,40)
console.log(typeof arr);
let testNull;
console.log(typeof testNull); // undefined
testNull = null;
console.log(typeof testNull); // object = NULL
//--------------------------------------------------------------------
// Convert Data Type
let convert_nb_to_str = nb.toString();
console.log(convert_nb_to_str);
console.log(typeof convert_nb_to_str);
console.log(typeof nb);
//--------------------------------------------------------------------
// Array
console.log(`Before : ${arr}`);
arr[0] = "11";
arr[2] = true;
arr.push("Hi");
console.log(`After : ${arr}`);
for (let i = 0; i<arr.length; i++){
    console.log(`Index = ${i}, Value = ${arr[i]}, Type = ${typeof(arr[i])}`)
}
//--------------------------------------------------------------------
//Operator + - * / % **
let a = 5, b = 10;
console.log("a+b  = "+(a+b));
console.log("a-b  = "+(a-b));
console.log("a*b =  = "+(a*b));
console.log("a/b  = "+(a/b));
console.log("a%b  = "+(a%b));
console.log("a**b  = "+(a**b));
//--------------------------------------------------------------------
//Operator == != > < >= <= (boolean)
console.log(`a==b = ${a==b}`);
console.log(`a!=b = ${a!=b}`);
console.log(`a>b = ${a>b}`);
console.log(`a<b = ${a<b}`);
console.log(`a>=b = ${a>=b}`);
console.log(`a<=b = ${a<=b}`);
//--------------------------------------------------------------------
//Operator && || !
console.log(`a==b && a!=b = ${(a==b) && (a!=b)}`);
console.log(`!a==b && a!=b = ${!(a==b) && (a!=b)}`);
console.log(`a==b || a!=b = ${(a==b) || (a!=b)}`);
//--------------------------------------------------------------------
//Operator ++ --
console.log(`a++(Postfix) = ${a++}, ++a(Prefix) = ${++a}`);
console.log(`a--(Postfix) = ${a--}, --a(Prefix) = ${--a}`);
console.log("a = "+a);
//--------------------------------------------------------------------
//Compound Assignment += -= *= /= %=
let c = 0;
console.log("c = "+c);
console.log(`c+=2 = ${c+=2}`);
console.log(`c-=1 = ${c-=1}`);
console.log(`c*=10 = ${c*=10}`);
console.log(`c/=2 = ${c/=2}`);
console.log(`c%=3 = ${c%=3}`);
//--------------------------------------------------------------------
console.log(`ลำดับความสำคัญของ Operator
1. ()
2. ++, -- (ซ้ายไปขวา)
3. *, /, % (ซ้ายไปขวา)
4. +, - (ซ้ายไปขวา)
5. <, <=, >, >= (ซ้ายไปขวา)
6. ==, != (ซ้ายไปขวา)
7. && (ซ้ายไปขวา)
8. || (ซ้ายไปขวา)
9. =, +=, -=, *=, /=, %= *(ขวาไปซ้าย)*`)
//--------------------------------------------------------------------
//Control Structure
