var age = prompt ("Вкажи свій вік числом");
if (age != +age){
    console.log(age+" не число");
}else if(+age < 0){
    console.log("вік не може бути від'ємним!");
}else if(+age == 0){
    console.log("ІДИ ЗВІДСИ, БРЕХЛО!");
}else if(+age >= 100){
    console.log("Вітаю тебе, довгожитель!")
}else if(+age%10 == 1 && +age!=11){
    console.log("Тобі "+age+" рік!");
}else if(+age%10>=2 && +age%10<=4 && !([12, 13, 14].includes(+age % 100))){
    console.log("Тобі "+age+" роки!")
}else{
    console.log("Тобі "+age+" років!")
}