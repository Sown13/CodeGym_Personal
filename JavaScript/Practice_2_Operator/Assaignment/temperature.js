function CtoF(){
    let C,F;
    C = prompt("Nhập độ C vào đây","độ C");
    F = ((9/5)*C)+32 ;
    document.getElementById("Fahren").innerHTML = C + " " + "độ C =" + " " + F + " " + "độ F"
}

