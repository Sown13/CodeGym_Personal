function Circle(){
    let r,S,C;
    r = document.getElementById("bankinh").value;
    S = (r**2)*3.14;
    C = (r*2)*3.14;
    document.getElementById("dientich").innerHTML= "diện tích hình tròn có bán kính" + " " + r + " " + "là" + " " +  S + " " + "và chu vi là" + " " + C;
}