// function getValue(){
//     let b,c;
//     b = document.getElementById("fromNation").valueAsNumber;
//     c = document.getElementById("toNation").valueAsNumber;
// }
function currencyConverse(){
    let a,b,c,d;
    a = document.getElementById("currency").valueAsNumber;
    b = document.getElementById("fromNation").valueAsNumber;
    c = document.getElementById("toNation").valueAsNumber;
    d = a*(c/b)
    document.getElementById("result").innerHTML = d
}

document.getElementById("converse").addEventListener("click",currencyConverse);
// document.getElementById("fromNation").addEventListener("onchange",getValue());
//  document.getElementById("toNation").addEventListener("onchange",getValue());