// var jora = () => alert("")

function toseconds (number1){
return number1*60;
}

console.log("1 minute = "+toseconds(1)+ "seconds");

var kerri = {name:"ferrari",color:"red",year:2030,startEngine: function(){alert("VROOOOOOMM......")
}}

var shkolla = {

    name:"blackboy",
    color:"superdarkblack",
    year:"2030 black boy"
}

console.log(kerri.name);
alert(kerri.startEngine());

var computer = new Object();

computer.name="Lenovo";
computer.CPU="Inter Core i/";
computer.RAM = "1668";
computer.GPU = "getare 4800";

function computerType(){
    return this.name+this.CPU+this.RAM+this.GPU;

};

console.log(computer.type())




