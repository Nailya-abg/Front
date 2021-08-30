// По клику на кнопочку добавить в корзину товар со следующими параметрами:
//     1 картинка
//     2 Заголовок
//     3 дополнительные параметры (цвет)
//     4 цена

//     Конкретные задачи:
//         1 Получить картинку
//         2 Получить заголовок

            // Решение
            // let ttl = document.getElementsByClassName("ttl"); 
            // ttl[1].innerText 


//         3 Получить дополнительные параметры
//         4 Получить цену
    
//      Принцыпы получения данных
//         Получить данные можно с помощью
//         1  .class
//         2  #id 
//         3  attribure
//         4  tag   

// document.getElementsByClassName
// ocument-вкладка
// .- связка
// Elements-элемент
// By-по\от
// ClassName-название класса

// Получить элементы по названию класса внутри документа

// let ttl = document.getElementsByClassName("ttl"); 
// ttl[1].innerText

// Результат: нечего не вывелось
// Без команды вывода ничего не выведится.

// let ttl = document.getElementsByClassName("ttl"); 
// console .log (ttl[0].innerText);
// console .log (ttl[1].innerText);
// console .log (ttl[2].innerText);
// console .log (ttl[3].innerText);
// console .log (ttl[4].innerText);
// console .log (ttl[5].innerText);
// console .log (ttl[6].innerText);
// console .log (ttl[7].innerText);
// console .log (ttl[8].innerText);
// console .log (ttl[9].innerText);

// Урок 29
// обращение от родительского к дочернему
// let ttl = document.querySelectorAll(".body_product>.ttl");

// console.log(ttl);
// Вывела только заголовки товара(5)

// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);
// получили название товаров(текст)

// Перегоним через цикл

// let ttl = document.querySelectorAll(".body_product>.ttl");

// console.log(ttl);
// Вариант вывода 1
// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);

// надо вывести индексы массива
// С помощью перебора цикла

// for (let text of ttl){
//     console.log(text.innerText);
// }

// var elements = document.getElementsByClassName("add_cart");
// var myFunction = function () {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
//     console(attribute[0].innerText);
// };

// document.getElementsByClassName("add_cart");



// var elements = document.getElementsByClassName("add_cart");

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
//     alert(attribute[0].innerText);
// };

// for(var i = 0; i<elements.length;i++){
//     elements[i].addEventListener("click", myFunction, false);
// }


// По клику на кнопочку добавить в корзину товар со следующими параметрами:
//     1 картинка
//     2 Заголовок
//     3 дополнительные параметры (цвет)
//     4 цена

//     Конкретные задачи:
//         1 Получить картинку
//         2 Получить заголовок

            // Решение
            // let ttl = document.getElementsByClassName("ttl"); 
            // ttl[1].innerText 


//         3 Получить дополнительные параметры
//         4 Получить цену
    
//      Принцыпы получения данных
//         Получить данные можно с помощью
//         1  .class
//         2  #id 
//         3  attribure
//         4  tag   

// document.getElementsByClassName
// ocument-вкладка
// .- связка
// Elements-элемент
// By-по\от
// ClassName-название класса

// Получить элементы по названию класса внутри документа

// let ttl = document.getElementsByClassName("ttl"); 
// ttl[1].innerText

// Результат: нечего не вывелось
// Без команды вывода ничего не выведится.

// let ttl = document.getElementsByClassName("ttl"); 
// console .log (ttl[1].innerText);

// Урок30
 
 
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
   
//   }
//   console.log("return") 
// }
 


 
// function calculateCircumference(radius) {
//   return 2 * Math.PI * radius;
//   console.log("return") 
// }

// calculateCircumference(1);
// 6.283185307179586


// Урок 31

// 1.	Сделайте функцию которая возводить в степень числа вводимые пользователем
var x = prompt("Введите число", "");
var n = prompt("Введите степень", "");
function pow(x, n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
if (n < 0) {
    alert('Степень ' + n +
            ' не используется, нужна степень больше нуля');
} else {
    alert(pow(x, n));
    
}

// 2.	Сделайте функцию которая находит площадь круга, радиус вводить пользователь 
function MyArea(myRadius){

	var area = Math.pow(myRadius, 2) * Math.PI;
  
	alert(
	    "Круг с радиусом " + myRadius +
	    " сантиметров равна площади " +
	    area + " сантиметров. \n" + myRadius +
	    " введенное пользователем число\n" +
	    area + " это площадь круга на основе пользовательского ввода."
	);
}

var myRadius = parseFloat(prompt("Введите радиус вашего круга в см:", 0));

MyArea(myRadius);

// 3 Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь.

var a = prompt("Введите длину", "");
var b = prompt("Введите ширину", "");
function square(a, b) {
    return a * b;
  }
  
  console.log(square);

  // урок 32

  // Строковые методы и свойства
  // let text = "Привет! Как у тебя дела?";
  // Свойство length возвращает длину строки:
  // console.log(text.length);       отв24 т.е 24 символа

  // Поиск строки в строке
//   console.log(text.indexOf("тебя")); отв14 Метод indexOf() возвращает индекс (положение) на first вхождения указанного текста )
 
  // Метод slice()
  // console.log(text.slice(7, 11));   отв как Метод slice() извлекает часть строки и возвращает извлеченную часть в новой строке.

// Метод принимает 2 параметра: начальную позицию и конечную позицию (конец не включен).

// Числовые методы и свойства

// let number = 120;
// Метод toString()
// Метод toString() возвращает число в виде строки.
// console.log(number.toString);

// Метод toExponential()
// Метод toExponential() возвращает строку с округленным числом, записанным с использованием экспоненциальной записи.
// Параметр определяет количество знаков после десятичной точки:
// var x = 9.656;
// console.log(x.toExponential(2));

// let x = 9;
// let y = "10";
// let result;
// result = x + y;
// console.log(result);      отв 910

// let x = 9;
// let y = "10";
// let result;
// result = x + +y;
// console.log(result);    отв 19

// Как суммировать числа с плавающей точкой в формате часов и минут?
// var arr = [0.15, 0.2, 3.45, 0.4, 2, 0.3, 5.2, 1, 1.4, 1.1, 2.4, 1, 3.4]
    
// var sum = 0.0;
    
// arr.forEach(function(item) {
//   console.log(sum);
//   sum += parseFloat(item);
// });

// converts a pseudo-float of the form hh.mm into an integer number of minutes
// robust against floating-point roundoff errors, also works for negative numbers
// function hhMmToMinutes(x) {
//   const hhmm = Math.round(100 * x);  // convert hh.mm -> hhmm
//   return 60 * Math.trunc(hhmm / 100) + (hhmm % 100);
// }

// convert minutes back to hh.mm pseudo-float format
// use minutesToHhMm(minutes).toFixed(2) if you want trailing zeros
// function minutesToHhMm(minutes) {
//   return Math.trunc(minutes / 60) + (minutes % 60) / 100;
// }

// const arr = [0.15, 0.2, 3.45, 0.4, 2, 0.3, 5.2, 1, 1.4, 1.1, 2.4, 1, 3.4];

// let sum = 0;
// console.log( arr.map(hhMmToMinutes).map(x => sum += x).map(minutesToHhMm) );

// var a = +prompt("Введите первое число", "");
// var b = +prompt("Введите второе число", "");
// function myFunction(a, b) {
//   return a + b;
// }

// console.log(myFunction);