// function getValue(){
//     let b,c;
//     b = document.getElementById("fromNation").valueAsNumber;
//     c = document.getElementById("toNation").valueAsNumber;
// }
function currencyConverse(){
    let a,b,c,d;
    a = document.getElementById("currency").valueAsNumber;
    console.log(a)
    b = parseInt(document.getElementById("fromNation").value);
    console.log(b)
    c = parseInt(document.getElementById("toNation").value);
    console.log(c)
    d = a*(c/b)
    document.getElementById("result").innerHTML = d


}


document.getElementById("converse").addEventListener("click",currencyConverse);
// document.getElementById("fromNation").addEventListener("onchange",getValue());
//  document.getElementById("toNation").addEventListener("onchange",getValue());