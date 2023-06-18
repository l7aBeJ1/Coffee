var randomXOrY = function (size) {
    return Math.floor(Math.random() * size)
}

var width = 1300 //ширина страницы вашего сайта
var height = 650 //высота страницы вашего сайта

var target = {
    x: randomXOrY(width),
    y: randomXOrY(height)
}

var image = document.querySelector(`coffeeicon`) //ссылка на вашу картинку
var imageElement = $(image)
imageElement.css({
    position: "absolute",
    left: target.x,
    top: target.y
})
$("body").append(imageElement)