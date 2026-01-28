/*Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість, вигляду:

var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};

"Послуги" можуть додаватися по ходу роботи:
services['Розбити скло'] = "200 грн";

Умови виконання ДЗ
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework5.
Додайте туди ваше домашне завдання
Вислати вашу гілку*/

var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",
};

//Додавання послуги
console.log(services);
console.log('Загальна вартість всіх послуг становить: ' + price()); //загальний прайс до додавання послуги
minPrice(); //мінімальна ціна до додавання сервісу
maxPrice () //максимальна ціна до додавання послуги
console.log("ДОДАЄМО ПОСЛУГУ".padStart(100,'-'));
services['Розбити скло'] = "200 грн";
console.log(services);
console.log('Загальна вартість всіх послуг становить: ' + price()); //загальний прайс після додавання послуги
minPrice(); //мінімальна ціна після додавання сервісу
maxPrice () //максимальна ціна до додавання послуги

//сума послуг
function price (){
    let totalPrice = 0;
    for (let key in services){
        totalPrice = totalPrice + (Number.parseFloat(services[key]));
    };
    return totalPrice;
};

//мінімальна ціна послуги
function minPrice (){
    let minValue = 0;
    let service
    for (let key in services){
        let value = Number.parseFloat(services[key]);
        if (minValue == 0 || minValue > value){
            minValue = value;
            service = key;
        }
    };
    console.log("Мінімальна ціна послуги становить: " + minValue + ' - ' + service);
    
};

//максимальна ціна послуги
function maxPrice (){
    let maxValue = 0;
    let service
    for (let key in services){
        let value = Number.parseFloat(services[key]);
        if (maxValue < value){
            maxValue = value;
            service = key;
        }
    };
    console.log("Максимальна ціна послуги становить: " + maxValue + ' - ' + service);
    
};