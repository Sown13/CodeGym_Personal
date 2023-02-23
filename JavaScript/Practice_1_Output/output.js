function showMessage(){
    alert('test xem có lên không')
}
function showMessage2(){
    document.write("lên thật này")
}
function showMessage3(){
    console.log("ok rồi thoát đi");
}
let mouse1 = document.getElementById("mouse1")
mouse1.addEventListener("mouseover",mouseover1)
mouse1.addEventListener("mouseout",mouseout1)
function mouseover1(){
    document.getElementById("mouse1").style.color= "red";
    document.getElementById("mouse2").style.color= "blue";
}
function mouseout1(){
    document.getElementById("mouse1").style.color = "black";
    document.getElementById("mouse2").style.color = "red";
}

