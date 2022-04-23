// Stagementการทำงานตามลำดับขั้นตอน

// // แสดงผลบนหน้าคอนโซล
// console.log("Hello world")

// // การแสดงผลผ่านหน้าเว็ปไซต์
// document.getElementById("text").innerHTML = "Javascript";

// document.write("Hello document write");

// // แสดงกล่องข้อความด้านบน
// window.alert("Hello alert");

// //Javascript variables

// var price1 = 20;
// var price2 = 30;
// var total = (price1 + price2);
// console.log(total);

// // การเชื่อมต่อตัวแปรหรือสตริง
// // "" เอาไว่เว้นวรรค
// var firstname = "Supasek";
// var lastname = "Laobutsa";
// var fullname = firstname + " " + lastname;
// console.log(fullname);

/* Arithmetic operators 

+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement

x++ ให้ค่า x ก่อนบวก
++x ให้ค่า x หลังบวก

var x = 10;
console.log(x++); มีค่า10
console.log(x); มีค่า11

var y = 10;
console.log(++y); มีค่า11
console.log(y); มีค่า11

var x = 10;
console.log( --x ); มีค่า 9
*/


/*
Comparison operators
    ==          equal to	                x == 8	      false
                                            x == 5	      true
                                            x == "5"	  true
    ===         equal value and equal type  x === 5	      true
                                            x === "5"	  false
    !=          not equal	                x != 8	      true
    !==         not equal value or not equal type       x !== 5	        false
                                                        x !== "5"	    true
                                                        x !== 8	        true
    >           greater than	                        x > 8	        false
    <           less than	                            x < 8	        true
    >=          greater than or equal to	            x >= 8	        false
    <=          less than or equal to	                x <= 8	        true

    */


// function myFunction(value1, value2); {
//     return value1 * value2;
// }

// console.log(myFunction(5, 5));

// เปลี่ยนค่า
// function change() {
//     return document.getElementById("profile").innerHTML = "Stupid"
// }

// prompt("มีเงินเท่าไหร่")

// var money = prompt("กรอกจำนวนเงิน")


// function change() {
//     return document.getElementById("profile").innerHTML = money
// }

// prompt("มีเงินเท่าไหร่")

// กล่องข้อความมาให้กรกอกแล้วกดปุ่มจะขึ้นคำตอบ
// var money = prompt("กรอกจำนวนเงิน")

// function change() {
//     var fish = document.querySelector('input').value
//     document.getElementById("profile").innerHTML = fish
// }

// let money = prompt("กรอกเงินมาน้าาาา")
// if(money >=1000) {
//     alert("ว้าวเงินเยอะจัง")
// }

// else if(money >=500) {
//     alert("555")
// }

// else if(money >=100) {
//     alert(";-;")
// }

// else {
//     alert("แย่จังง")
// }

// let score = prompt("กรอกคะแนนของคุณ")
//     if(score >=80) {
//         alert("A")
//     }

//     else if(score >=70) {
//         alert("B")
//     }

//     else if(score >=60) {
//         alert("C")
//     }

//     else if(score >=50) {
//         alert("D")
//     }

//     else {
//         alert("F")
//     }

// let score = prompt("ใส่คะแนนของคุณ")
//     if(score>=80) {
//     document.getElementById("grade").innerHTML = "A"
//     }

//     else if(score>=70) {
//         document.getElementById("grade").innerHTML = "B"
//     }

//     else if(score>=60) {
//         document.getElementById("grade").innerHTML = "C"
//     }

//     else if(score>=50) {
//         document.getElementById("grade").innerHTML = "D"
//     }

//     else {
//         document.getElementById("grade").innerHTML = "F"
//     }

// for(let i =0;i<=5;i++) {
//     console.log(i)
//     console.log("Hello world")
// }

// while(prompt("หัว หรือ ก้อย")!="หัว") {
//     document.getElementById("grade").innerHTML = "ไม่ใส่หัวเองน้าาา"
// }

// function change() {
//     var fish = document.querySelector("input").value
//     while(fish == "หัว") {
//         alert("True")
//         fish = ''
//     }
// }

// const random =Math.floor(Math.random()*10)
// console.log(random)

// function group() {
//     alert("Maiok")
// }

function btn() {
    document.getElementById("grade").innerHTML = "กดทำไม"
}
function btn2() {
    document.getElementById("grade").innerHTML = "ขอบคุณนะ"
}
