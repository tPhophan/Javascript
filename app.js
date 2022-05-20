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
arr.push({myName:"Tossaphon",city:"Bangkok"})
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
// ลำดับ (Seqyence)
// เงื่อนไข (Condition)
//      if..else if..else
if (a>b){
    console.log("a > b = TRUE");
}
else if(a<b){
    console.log("a < b = TRUE");
}
else{
    console.log("a = b = TRUE");
}
//--------------------------------------------------------------------
//      if..else if..else (Ternary Operator)
console.log(a>b ?"T" :"F");
//--------------------------------------------------------------------
//      Switch..Case
let month = 9;
switch (month){
    case 1:console.log("มกราคม");
        break;
    case 2:console.log("กุมพาพันธ์");
        break;
    case 3:console.log("มีนาคม");
        break;
    case 4:console.log("เมษายน");
        break;
    case 5:console.log("พฤษภาคม");
        break;
    case 6:console.log("มิถุนายน");
        break;
    case 7:console.log("กรกฎาคม");
        break;
    case 8:console.log("สิงหาคม");
        break;
    case 9:console.log("กันยายน");
        break;
    case 10:console.log("ตุลาคม");
        break;
    case 11:console.log("พฤศจิกายน");
        break;
    case 12:console.log("ธันวาคม");
        break;
    default:console.log("Error");
}
//--------------------------------------------------------------------
// ทำซ้ำ (Loop)
while(true){
    console.log("while ค่า a = "+a);
    a++;
    if (a>b) break;
    else continue;
}

for (a;a>=5;a--){
    console.log("for ค่า a = "+a);
}

do {
    console.log("do while ค่า a = "+a)
    a--;
} while (a>=0);
//--------------------------------------------------------------------
// null, undefined, NaN
let d; //undefined
console.log(d);
d = null; //null
console.log(d);
d = 7*"a"; //NaN
console.log(d);
//--------------------------------------------------------------------
// Function (subject)
function ft_hi(){
    alert("Hello World");
}
//for (a;a<2;a++) ft_hi();
//--------------------------------------------------------------------
// Function (Arg)
function ft_sum(x,y){
    console.log("ผลรวม = "+(x+y));
}
ft_sum(5,99);
//--------------------------------------------------------------------
// Function (Return)
function ft_getPass(){
    return "a123456789"
}
let myPass = ft_getPass();
console.log("Password : "+ft_getPass());
console.log("Password : "+myPass);
//--------------------------------------------------------------------
// Function (Arg, Return)
function ft_setSalary(salary){
    let bonus = 1000;
    return salary + bonus;
}
console.log("เงินเดือน + โบนัส = "+ft_setSalary(15000));
//--------------------------------------------------------------------
// Function (Arg, Return, Default)
function ft_showMassage(myMassage = "Hello World"){
    return "ข้อความของคุณคือ : "+myMassage;
}
let thisMass = ft_showMassage();
let myMass = "Hi Bro";

console.log(thisMass)
thisMass = ft_showMassage(myMass);
console.log(thisMass)
//--------------------------------------------------------------------
// Local Variable
// Global Variable
//--------------------------------------------------------------------
// Array Properties & Function
console.log("Array = "+arr);
console.log("Count Array = "+arr.length);
console.log("Sort Array = "+arr.sort());
//--------------------------------------------------------------------
// foreach
function myData(item){
    if (typeof(item) == "object")console.log(`myName : ${item.myName}, city : ${item.city}`)
    else console.log(item);
}
arr.forEach(myData);
//--------------------------------------------------------------------
// Convert Array to string
//.toString()
console.log("toString() = ",arr.toString());
//.join(sep)
console.log("join() = ",arr.join("|"));
//.pop()
let last_Index = arr.pop();
console.log("Last Index of Array : ",last_Index);
console.log("After : ",arr);
//--------------------------------------------------------------------
//Concat Array
let arr2 = ["ส้ม","องุ่น","กล้วย","มะม่วง"];
let arr3 = ["Yellow", "red", "blue", "black"]
let conArr = arr.concat(arr2, arr3);
console.log(conArr.sort());
//--------------------------------------------------------------------
let points = [20, -5, -2, 40, 100, -500, 150];
console.log(points);
points.sort(function(a,b){return a-b}) // ASC (น้อยไปมาก)
console.log(points);
points.sort(function(a,b){return b-a}) // DESC (มากไปน้อย)
console.log(points);
//--------------------------------------------------------------------
// Javascript Object
let product = {
    name: "Mouse",
    color: "black",
    category: "computer",
    size: "M",
    price: 1500
};
console.log("ชื่อสินค้า = ",product.name)
console.log("สีสินค้า = ",product["color"])
console.log("หมวดหมู่ = ",product["category"])
console.log("ราคา = ",product.price)
// Javascript Object (Method)
let user ={
    name: "Tossaphon",
    age: 28,
    email: "Tossaphon_p@hotmail.com",
    getUser:function(){
        return "Name : " + this.name + ", E-mail : " + this.email;
    },
    getYear:function(){
        let d = new Date()
        return "Year : " + (d.getFullYear() - this.age);
    }
};

console.log(user.getUser());
console.log(user.getYear());
//--------------------------------------------------------------------
//Confirm Box
function ft_DeleteData(){
    let result = confirm("Delete Data ?");
    console.log(result);
    result ?console.log("Deleted.") :console.log("Canceled.")
}
//--------------------------------------------------------------------
//HTML DOM (Document Object Model)
const p = document.getElementsByTagName("p");
console.log(p);
const p_id = document.getElementById("demo");
console.log(p_id);
const btn_class = document.querySelectorAll(".btn"); //id(#), class(.), Tag()
console.log(btn_class);
console.log(btn_class[2]);
const box = document.querySelectorAll("div");
console.log(box);

function ft_ShowData(){
    p_id.innerHTML = `x = ${x}, y = ${y}, z = ${z}`;
    p_id.style.backgroundColor = "lime";
    p_id.style.fontSize = "20px";

    btn_class[1].style.backgroundColor = "lime";
    btn_class[1].style.fontSize = "20px";

    btn_class[2].setAttribute("class", "test_btn"); // change class

    box[0].setAttribute("class", "box"); // change class
}