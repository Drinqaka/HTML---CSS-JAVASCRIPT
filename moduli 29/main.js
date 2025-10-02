var button = document.getElementById ("button1") 
button.onclick = function(){
    alert ("heloooo")
}

var button2 = document.querySelector ("#button2")
var button3 = document.querySelector ("#button3")
var button4 = document.querySelector ("#button4")
var button5 = document.querySelector ("#button5")
button2.addEventListener ( 'click', function(){
   alert ("hellop im Drini")
})

button3.onmouseover = function(){
    alert ("wassup beta im indian")
}

button4.onmouseleave = function(){
    alert ("beta i said i scamed u")
}

button5.onmousewheel = function(){
    alert ("beta im not gonna give ur money u black boy")
}

var btn1 = document.getElementById ("btn1")
var btn2 = document.getElementById ("btn2")
var txt1 = document.getElementById ("txt1")

btn1.onclick = function(){
   txt1.style.color="red"
}

