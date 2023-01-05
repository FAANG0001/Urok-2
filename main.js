

let age = +prompt('введите ваш возраст');
 

if( 0 < age && age<= 18) {

            alert(' Вы еще молоды , вам нужно учится ');

} else if (18 < age && age <= 50 ){

            alert(' Вам нужно работать ');

} else if (50 < age && age <= 59){

            alert(' Вам скоро на пенсию ');

}else if (59 < age && age <= 100){

            alert(' Вы пенсионер ');

} else{
        alert(' Что то пошло не так!');
}



let time = +prompt('Ввести время в цифрах');

switch(time) {
    case 24 :
        alert(' Night ');
        break;
    case 23 :
        alert(' Night ');
        break;
    case 22 :
        alert(' Night ');
        break;
    case 21 :
        alert(' Evening  ');
        break;
    case 20 :
        alert(' Evening  ');
        break;
    case 19 :
        alert(' Evening  ');
        break;
    case 18 :
        alert(' Evening  ');
        break;
    case 17 :
        alert(' Evening  ');
        break;
    case 16 :
        alert(' Good afternoon  ');
        break;
    case 15 :
        alert(' Good afternoon   ');
        break;
    case 14 :
        alert(' Good afternoon   ');
        break;
    case 13 :
        alert(' Good afternoon   ');
        break;
    case 12 :
        alert(' Good afternoon   ');
        break;
    case 11 :
        alert(' Good morning   ');
        break;
    case 10 :
        alert(' Good morning   ');
        break;
    case 9 :
        alert(' Good morning  ');
        break;
    case 8 :
        alert(' Good morning   ');
        break;
    case 7 :
        alert(' Good morning   ');
        break;
    case 6 :
        alert(' Good morning   ');
        break;
    case 5 :
        alert(' Good morning   ');
        break;
    case 4 :
        alert(' Good morning   ');
        break;
    case 3 :
        alert(' Night   ');
        break;
    case 2 :
        alert(' Night   ');
        break;
    case 1 :
        alert(' Night   ');
        break;
   
    default: 
        alert('Нет такого времени');
        break;
}


let one = +prompt('введите первое число'); 
let two = +prompt('введите второе число'); 
let three = +prompt('введите третье число'); 

if (two > one && two < three || two > three && two < one){
   alert('среднее число ' + two)
}else if (one > two && one < three || one < two && one > three){
    alert('среднее число ' + one)
}else if (three > two && one > three || three < two && one < three){
    alert('среднее число ' + three)
}else {
    alert('что то пошло не так')
}