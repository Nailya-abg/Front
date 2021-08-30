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

var elements = document.getElementsByClassName("add_cart");

var myFunction = function() {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    alert(attribute[0].innerText);
};

for(var i = 0; i<elements.length;i++){
    elements[i].addEventListener("click", myFunction, false);
}




    


