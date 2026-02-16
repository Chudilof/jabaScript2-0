/*
"Параноя"

В нас є масив обʼєктів в яких міститься email.

Copy code
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

- одне, або два слова які, можуть містити (латинські букви, цифри) яке може бути розділене крапкою.

Умови виконання ДЗ

Не використовувати функції або інші матеріали, які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework7.
Додайте туди ваше домашнє завдання
Вишліть посилання на вашу гілку
*/

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

function validation(importValue) {
    let validAccount = [];
    let regValues = /^\w+.?\w+@(gmail.com|yahoo.com)$/;
    for (i = 0; i < importValue.length; i++) {
        if (regValues.test(importValue[i].email)) {
            validAccount[i] = importValue[i];
        }
    }
    return validAccount;
}

let result = validation(arr);
for (i=0;i<result.length;i++){
    console.log(result[i]);
}
// console.log(arr);
// console.log(result);
