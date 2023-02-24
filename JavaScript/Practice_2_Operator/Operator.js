let inputWidth;
let inputLength;
inputWidth = prompt("nhập chiều rộng")
inputLength = prompt("nhập chiều dài")

let width = parseInt(inputWidth)
let length = parseInt(inputLength)
let area = width * length

document.getElementById("p3").innerHTML = "the area is:" + " " + area