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

let ttl = document.getElementsByClassName("ttl"); 
console .log (ttl[1].innerText);