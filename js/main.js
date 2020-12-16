/*
Задание:
Сделать рабочий фильтр цветов.
При нажатии на один из цветов, круг с цветом - мы видим автомобиль, соответствующего цвета.
А активный цвет выделяется, за счет дополнительного CSS класса ".colorItem--active".

Работу сдать через CodePen.

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/

// Объявляем переменную цвета авто
var imgColor = document.querySelector('img[alt="Автомобиль"]');
console.log(imgColor)

// Прослушиваем клик по внешнему контейнеру
colorsSelector.addEventListener('click', function(event){
    
    // Определяем именно тот элемент по которому кликнули
    colorItem = event.target;

    // Добавляем условие, чтобы исключить colorsSelector из выбора по клику - этот "костыль" не нравится, но пока не нашла способа обойти
    if (colorItem.classList.contains("colorsSelector")){
        return
    } 
    
    //Удаляем класс active у элемента у которого он был 
    document.querySelector('.colorItem--active').classList.remove("colorItem--active");
    
    // Добавляем класс active элементу, по которому был клик
    colorItem.classList.add("colorItem--active");
   
    // Задаем соответствие цветов через условие
    if (colorItem.classList.contains("colorBlue")) {
        imgColor.src = "//webcademy.ru/files/js2020/solaris/blue.png";
    } else if (colorItem.classList.contains("colorRed")) {
        imgColor.src = "//webcademy.ru/files/js2020/solaris/red.png";
    } else if (colorItem.classList.contains("colorWhite")){
        imgColor.src = "//webcademy.ru/files/js2020/solaris/white.png";
    } else if (colorItem.classList.contains("colorWhitePure")) {
        imgColor.src = "//webcademy.ru/files/js2020/solaris/white-pure.png";
    } else if (colorItem.classList.contains("colorWhite")) {
        imgColor.src = "//webcademy.ru/files/js2020/solaris/white.png";
    } else if (colorItem.classList.contains("colorOrange")) {
        imgColor.src = "//webcademy.ru/files/js2020/solaris/orange.png";
    } else if (colorItem.classList.contains("colorGraphite")){
        imgColor.src = "//webcademy.ru/files/js2020/solaris/graphite.png";
    } else {
        imgColor.src = "//webcademy.ru/files/js2020/solaris/black.png";
    }
})



// Получаем массив элементов - круги с цветом
// var colorItems = document.querySelectorAll('.colorItem');
// console.log(colorItems)


// for (i = 0; i < colorItems.length; i++) {

//     // Удаляем класс active у элемента у которого он был
//     document.querySelector('.colorItem--active').classList.remove("colorItem--active");
    
//     // Прослушиваем клик по каждому элементу
//     colorItems[i].addEventListener('click', function(){
//         // Добавляем класс active
//         // this.classList.add("colorItem--active");
//         colorItems[i].classList.add("colorItem--active");
//     });
// }







