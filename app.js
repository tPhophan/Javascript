document.write("<br>");
document.write("<h1>Test 2</h1>");
document.write("<p>Javascript เบื้องต้น</p>");

//alert("Test Test.");

console.log("Hello World");
console.error("Error");
console.warn("Warning");
//--------------------------------------------------------------------
// บรรทัดเดียว

/*
หลาย
หลาย
บรรทัด
*/
//--------------------------------------------------------------------
const MONEY = 100; //เปลี่ยนแปลงค่าไม่ได้ พิมพ์ใหญ่
let money2;
money2 = 200; //เปลี่ยนแปลงค่าได้ พิมพ์เล็ก
console.log(MONEY+money2);

let x = 10, y= 20, z = 30;
console.log(x+y+z);
//--------------------------------------------------------------------
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
let arr = [10,20,30,40]; // array
console.log(typeof arr);
let testNull;
console.log(typeof testNull); // undefined
testNull = null;
console.log(typeof testNull); // object = NULL
