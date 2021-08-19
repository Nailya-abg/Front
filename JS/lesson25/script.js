"use strict";
// Объект
// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// console.log(obj[1]);

// let obj = {1: 'a', 2: 'b', 3: 'c'};
// alert(obj);

// let obj = {1: 'a', 2: 'b', 3: 'c'};
// console.log(obj); 


// let obj = {key1: 'a', key2: 'b', key3: 'c'};
// console.log(obj['key1']);

// let obj = {key1: 'a', key2: 'b', key3: 'c'};
// console.log(obj['key1']);

// let obj = {};

// obj['key1'] = 'a';
// obj['key2'] = 'b';
// obj['key3'] = 'c';

// console.log(obj);

// Для перебора всех свойств объекта используется цикл for..in. 
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // ключи
//     alert( key );  // name, age, isAdmin
//     // значения ключей
//     alert( user[key] ); // John, 30, true
//   }

// let user = {
//     name: "John",
//     age: 30
//   };
  

//   Цикл for для массивов в JavaScript
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }


// Перебор массива и if
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 == 0) {
// 		console.log(arr[i]);
// 	}
// }

// Нахождение суммы элементов
// let result = 0;
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	result += arr[i];
// }

// console.log(result);

// Упорядочение свойств объекта
// let codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания",
//     // ..,
//     "1": "США"
//   };
  
//   for (let code in codes) {
//     alert(code); // 1, 41, 44, 49
//   }
// Домашнее задание 24

  // let  person = {
  //   myName: "Naila",
  //   surnamey: "Nasryllaeva",
  //   age: 30,
  //   yearOfBirth: 1991,
  //   placeOfBirth: "Kyrgyzstan"

  // };
  // for (let key in  person){
  //   alert( key );
  //   alert( person[key] );
  //   console .log(person);

  // }
  
  // Урок 25
  // Базовые функции.
  // console .log("сообщения"); 
  // alert("Привет гость");


  // var years = prompt("сколько вам лет?", 100);
  // alert("Вам"+years+"лет!");

  // var result =prompt("Сколько будет 2+2?", ""),
  // result =result + 2;
  // alert("Вам" + result + "лет");

  // var msg;
  // if (result =="4"){
  //   msg="Верно";
  // }else{
  //   msg="Лож";
  // }
  // alert("Вам" + msg + "лет");

// Домашнее задание
  let myname = prompt("Ваше имя?", "");
  let mysurnamey = prompt("Ваше фамилие?", "");
alert("Привет" + myname + mysurnamey);


let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert("Сумма"+"="+ (a + b) );

let c = +prompt("Введите первое число", "");
let d = +prompt("Введите второе число", "");

alert("Произиедение"+"="+  (c * d) );
  