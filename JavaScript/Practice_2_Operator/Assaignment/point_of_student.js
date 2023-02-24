
function averageCal(){
    let pointP,pointC,pointB, average;
    pointP = document.getElementById("vatly").value;
    pointC = document.getElementById("hoahoc").value;
    pointB = document.getElementById("sinhhoc").value;
    average = (pointP*1 + pointC*1 + pointB*1)/3 ;
    document.getElementById("trungbinh").innerHTML= average
}

