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
    "стрижка": "10 грн",
    "гоління": "50 грн",
    "Миття голови": "100 грн",
    getInfo: function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ': ' + this[key])
            }
        }
    },
    //сума послуг
    price: function () {
        let totalPrice = 0;
        for (let key in this) {
            if (typeof this[key] !== 'function' && (!isNaN(Number.parseFloat(this[key])))) {
                totalPrice = totalPrice + Number.parseFloat(this[key])
            }
        };
        return "Загальна вартість послуг: " + totalPrice + " грн.";
    },
    //мінімальна ціна послуги
    minPrice: function () {
        let minValue = null;
        let service
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                let value = Number.parseFloat(this[key]);
                if (!isNaN(value)) {
                    if (minValue == null || minValue > value) {
                        minValue = value;
                        service = key;
                    }
                }
            }

        };
        return "Мінімальна ціна послуги становить: " + minValue + ' грн. - ' + service
    },
    //максимальна ціна послуги
    maxPrice: function () {
        let maxValue = null;
        let service
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                let value = Number.parseFloat(this[key]);
                if (!isNaN(value)) {
                    if (maxValue == null || maxValue < value) {
                        maxValue = value;
                        service = key;
                    }
                }
            }
        };
        return "Максимальна ціна послуги становить: " + maxValue + ' грн. - ' + service

    }
};


services.getInfo();
console.log(services.price()); //загальний прайс до додавання послуги
console.log(services.minPrice()); //мінімальна ціна до додавання сервісу
console.log(services.maxPrice()) //максимальна ціна до додавання послуги
console.log("ДОДАЄМО ПОСЛУГУ".padStart(100, '-'));
services['Розбити скло'] = "200 грн"; //Додавання послуги
services['Запитати'] = "безкоштовно"; //Додавання безкоштовної послуги
services.getInfo();
console.log(services.price()); //загальний прайс після додавання послуги
console.log(services.minPrice()); //мінімальна ціна після додавання сервісу
console.log(services.maxPrice()) //максимальна ціна до додавання послуги



