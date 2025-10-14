var x=5;
if(x>2){
    console.log("numri eshte ma i madh se 2")
}
else{
    console.log("numri eshte me i vogel")
}

var input = document.getElementById('input');
var button = document.getElementById('btn');
var text = document.getElementById('text');

button.onclick=function(){
    text.innerHTML=input.value;
}

var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var button1 = document.querySelector('#sum');
var result = document.querySelector('#result');
var kushti = document.querySelector('#kushti');

button1.onclick = function(){
    result.innerHTML=parseInt(input1.value)+parseInt(input2.value);
};

sum.onclick = function(){
    if(result>10){
        kushti.innerHTML = "Numri ma i madh sa 10";
    }else if(result<10){
        kushti.innerHTML = "Numri ma i vogel sa 10";
    }else{kushti.innerHTML = "Numri eshte 10";}
}