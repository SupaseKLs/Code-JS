<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- <h1 id="text1">btn1</h1>
    <button onmouseout="changeText1()">changeText</button>
    <h1 id="text2">Content</h1>
    <button onmouseover="changeText2()">Content</button>  -->
    <!-- <h1 id="text3">Content</h1>
    <button id="btn" onclick="clickChange()">Click ME</button> -->
    <h1 id="content">Content</h1>
    <input id="inp" type="text">
    <script>
      // console.log("Hello World")

// // const sayHello = function() {
// //     console.log("Hello")
// // }

// const sayHello = (x,y) => {
//     console.log(`x มีค่า = ${x} || y มีค่า = ${y}`) //``
// }
// const result = sayHello(10,20)
// console.log(result) //returnจบการทำงาน

// const person = {
//     name : "Mar",
//     age : 17
// }
// console.log(person)
// person.name = "JS"
// console.log(person)
// person.height = 163
// console.log(person)

// const items = [
//     {
//         name : "Pao",
//         age : 18,
//         city : "Bangkok"
//     },
//     {
//         name : "Mew",
//         age : 18,
//         city : "Home"
//     }
// ]
// console.log(items)
// console.log(items[0])
// console.log(items[1])
// console.log(items[0].name)
// console.log(items[1].city)

// const items = [
//     {name : "keyboard",price : 150},
//     {name : "keyboard",price : 50},
//     {name : "keyboard",price : 200},
//     {name : "keyboard",price : 10}
// ]
// for (let i = 0; i < items.length;i++) {
//     console.log(items[i].price)
// }

// const animals = ["Fish","Cat","Fish"]
// console.log(animals)

// animals.push("Tiger")
// console.log(animals)

// animals.pop()
// console.log(animals)

// animals.unshift("Buffalo")
// console.log(animals)

// animals.shift()
// console.log(animals)

// let show = ''
// const rian = (n) => {
//     for (let height = 1; height < n + 1; height++) {
//         for (let weight = 1; weight < n + 1; weight++) {
//             show += height
//     }
//     show += "\n"

// }
// console.log(show)
// show = ''
// }
// rian(2)
// rian(3)
// rian(4)

// let show = ''
// let num = 0
// const rian = (n) => {
//     for (let index = 1; index < n + 1; index++) {
//         for (let index = 1; index < n + 1; index++) {
//             show += index
//         }
//         show += "\n"
//     }

//     console.log(show)
//     show = ''

// }

// rian(2)
// rian(3)
// rian(4)

// let show = ''
// let num = 1
// const rian = (n) => {
//      for (let height = 1; height < n + 1; height++) {
//         for (let weight = 1; weight < n + 1; weight++) {
//             num++
//             show += num
//     }
//     show += "\n"

// }
//     console.log(show)
//     show = ''
// }
// rian(2)
// rian(3)
// rian(4)

// let show = ""
// const number = (n) => {
//     for (let i = 0;i < 3;i++) {

//     }
// }
// number
// number
// number

// const items = () => [
//     {name:"A",age : 15},
//     {name:"B",age : 15},
//     {name:"C",age : 15},
//     {name:"D",age : 15}
// ]

// const name = (x) => {
//     console.log("F name")
//     if (items[x] != undefined) {
//         console.log(items[x].name)
//     }
//     else {
//         console.log("No name")
//     }
// }

// const age = (x) => {
//     console.log("F age")
//     if (items[x] != undefined) {
//         console.log(items[x].age)
//     }
//     else {
//         console.log("No age")
//     }
//     callback(x)
// }

// const show = (x) => {
//     console.log("F Show")
//     callback(x,name)
// }
// show(1,age)

// const person = {
//     name : "A",
//     age : 17,
//     other : {
//         name : "B",
//         age : 18,
//         color : "red"
//     }
// }
// console.log(person)
// console.log(person.name)
// console.log(person.other.color)

// const printMarian = function () {
//     console.log("Marian")
// }
// const printOnline = function () {
//     console.log("Online")
// }
// const call = function (callback) {
//     console.log("callback function") ;
//     callback();
// }
// call("printMarian")
// let content = document.getElementById("content");
// alert(content.innerHTML);
// content.innerHTML = "<h1>Heading1</h1> <h2>Haeding2</h2>";

// function changeText1() {
//     document.getElementById("text1").style.color = "orange"
// }
// function changeText2() {
//     document.getElementById("text2").style.color = "green"
// }

// const btn = document.getElementById("btn")
// const content = document.getElementById("text3")
// function clickChange(event) {
//     content.innerHTML = "Marine Online"
// }
const show = () => {
    let list = inp.value
    let ya = list.length

    content.innerHTML = list[Number(ya)-1];
}
inp.onkeyup = show;
    </script> 
</body>
</html>
        
