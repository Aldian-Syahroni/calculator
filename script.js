
var inputNumber = document.getElementById('inputnumber');
function pushBtn(obj){
 var pushed = obj.innerHTML;

 
 if (pushed == "="){
    inputNumber.innerHTML = eval(inputNumber.innerHTML) 
    
 }else if(pushed == "AC"){
    inputNumber.innerHTML = "0";
 }else if(pushed == "%"){
    inputNumber.innerHTML = inputNumber.innerHTML * 0.01;
 }else {
    if(inputNumber.innerHTML == "0"){
        inputNumber.innerHTML = pushed;
    }else{
        inputNumber.innerHTML += pushed;
    }
 }
}