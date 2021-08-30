// Урок 28
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

// Урок 30
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
//   console.log("return"); 
// }
 


 
// function calculateCircumference(radius) {
//   return 2 * Math.PI * radius;
//   alert("return"); 
// }

// calculateCircumference(1);
// 6.283185307179586


// Урок 31

// 1.	Сделайте функцию которая возводить в степень числа вводимые пользователем
// var x = prompt("Введите число", "");
// var n = prompt("Введите степень", "");
// function pow(x, n) {
//     var result = 1;
//     for (var i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// if (n < 0) {
//     alert('Степень ' + n +
//             ' не используется, нужна степень больше нуля');
// } else {
//     alert(pow(x, n));
    
// }

// 2.	Сделайте функцию которая находит площадь круга, радиус вводить пользователь 
// function MyArea(myRadius){

// 	var area = Math.pow(myRadius, 2) * Math.PI;
  
// 	alert(
// 	    "Круг с радиусом " + myRadius +
// 	    " сантиметров равна площади " +
// 	    area + " сантиметров. \n" + myRadius +
// 	    " введенное пользователем число\n" +
// 	    area + " это площадь круга на основе пользовательского ввода."
// 	);
// }

// var myRadius = parseFloat(prompt("Введите радиус вашего круга в см:", 0));

// MyArea(myRadius);

// 3 Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь.

var a = prompt("Введите длину", "");
var b = prompt("Введите ширину", "");
function square(a, b) {
    return a * b;
  }
  
  console.log(square);