let odinica = "км";
let chislo = 15;

switch (odinica){
    case "км":
        var result = chislo * 1000;
        console.log(chislo+" "+odinica+" це "+result+" метрів");
        break;
    case "кг":
        var result = chislo * 1000;
        console.log(chislo+" "+odinica+" це "+result+"  грам");
        break;
    case "год":
        var result = chislo * 60;
        console.log(chislo+" "+odinica+" це "+result+"  хвилин");
        break;
    default:
        console.log("Покищо невідома одиниця виміру");
    
}