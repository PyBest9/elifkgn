function check_input_if_empty(){

  
    if(document.getElementById('inputcode').value.length==0){
      alert("Enter code,please")
    }

}
function call_oprtor1(){

  var myimg  = document.getElementById('input_img1');
  var mysrc = myimg.src;
  var inputlenth = document.getElementById('inputcode').value.length;
  
  if (mysrc && inputlenth !=0) {
    mobilis();
  } else {

 }
 
}
function call_oprtor2(){
   var myimg  = document.getElementById('input_img2');
  var mysrc = myimg.src;
  var inputlenth = document.getElementById('inputcode').value.length;
  
  if (mysrc && inputlenth !=0) {
   djezzy();
  } else {
  
 }
 
}
function call_oprtor3(){
    var myimg  = document.getElementById('input_img3');
  var mysrc = myimg.src;
  var inputlenth = document.getElementById('inputcode').value.length;
  
  if (mysrc && inputlenth !=0) {
    ooredoo();
  } else {
  
 }
}
function call_operator4(){
    var myimg  = document.getElementById('input_img4');
  var mysrc = myimg.src;
  var inputlenth = document.getElementById('inputcode').value.length;
  
  if (mysrc && inputlenth !=0) {
    logiciel();
  } else {
 
 }
}





function mobilis (){
var input = document.getElementById('inputcode').value;

var number = input,
    output = [],
    sNumber = number

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

var slc1 = output.slice(0,5);
var tot1 = slc1.join("")
var tot2 = parseInt(tot1) + 520 * 3
var slc2 = output.slice(8);
var tot3 = slc2.join("");
var tot4 = parseInt(tot3)+ 1854;
var str = "" + tot2+ ""+tot4;
document.getElementById("mobilis_result1").innerHTML = str;
document.getElementById('inputcode').value = ""


}
function djezzy (){
var input = document.getElementById('inputcode').value;

var number = input,
    output = [],
    sNumber = number

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

var slc1 = output.slice(0,5);
var tot1 = slc1.join("")
var tot2 = parseInt(tot1) + 520 * 3
var slc2 = output.slice(8);
var tot3 = slc2.join("");
var tot4 = parseInt(tot3)+ 19082;
var str = "" + tot2+ ""+tot4;

document.getElementById("djezzy_result1").innerHTML =  str;
document.getElementById('inputcode').value = ""

}

function ooredoo (){
var input = document.getElementById('inputcode').value;


var number = input,
    output = [],
    sNumber = number

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

var slc1 = output.slice(0,5);
var tot1 = slc1.join("")
var tot2 = parseInt(tot1) + 520 * 3
var slc2 = output.slice(8);
var tot3 = slc2.join("");
var tot4 = parseInt(tot3)+ 24971;
var str = "" + tot2+ ""+tot4;
document.getElementById("ooredoo_result1").innerHTML = str;
document.getElementById('inputcode').value = ""

}
function logiciel() {
  var input = document.getElementById('inputcode').value;


var number = input,
    output = [],
    sNumber = number

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(sNumber.charAt(i));
}
//console.log(output)

var slc1 = output.slice(0,7);
//console.log(slc1);
var code1 = slc1[0];
var code2 = slc1[1];
var code3 = slc1[2];
var code4 = slc1[3];
var reunet = (code1.charCodeAt(0)+""+code2.charCodeAt(0)+""+
  code3.charCodeAt(0)+""+code4.charCodeAt(0))
console.log(reunet);
document.getElementById('cash').value = reunet;


var inputcash = document.getElementById('cash').value;


var numbercash = inputcash,
    outputcash = [],
    sNumbercash = numbercash

for (var i = 0, len = sNumbercash.length; i < len; i += 1) {
    outputcash.push(sNumbercash.charAt(i));
    
}
console.log(outputcash);
var slc01 = outputcash.slice(0,7);
console.log(slc01);
var code01 = slc01[6];
var code02 = slc01[5];
var code03 = slc01[4];
var code04 = slc01[3];
var code05 = slc01[2];
var code06 = slc01[1];
var code07 = slc01[0];
document.getElementById('cash').value = (code01+""+code02+""+code03+""+
  code04+""+code05+""+code06+""+code07);
var inputcashval = document.getElementById('cash').value;

var logitot = (inputcashval * 5)


//var tot1 = slc1.join("")
//var tot2 = parseInt(tot1) + 520 * 3
//var slc2 = output.slice(8);
//var tot3 = slc2.join("");
//var tot4 = parseInt(tot3)+ 24971;
//var str = "" + tot2+ ""+tot4;
//document.getElementById("logiciel_result1").innerHTML = str;
document.getElementById("logiciel_result1").innerHTML = logitot;
document.getElementById('inputcode').value = ""

 
}


function mobilischoix() {
  document.getElementById('input_img2').removeAttribute('src');
  document.getElementById('input_img3').removeAttribute('src');
  document.getElementById('input_img4').removeAttribute('src');
  document.getElementById("input_img1").src="../img/mobilis.png";
  document.getElementById('inputcode').value= "";
}

function djezzychoix() {
  document.getElementById("input_img2").src="../img/djezzy.png";
  document.getElementById('input_img1').removeAttribute('src');
  document.getElementById('input_img3').removeAttribute('src');
  document.getElementById('input_img4').removeAttribute('src');
  document.getElementById('inputcode').value= "";
  

}

function ooredoochoix() {
  document.getElementById("input_img3").src="../img/ooredoo.png";
  document.getElementById('input_img1').removeAttribute('src');
  document.getElementById('input_img2').removeAttribute('src');
  document.getElementById('input_img4').removeAttribute('src');
  document.getElementById('inputcode').value= "";
  

}

function logicielchoix() {
  document.getElementById("input_img4").src="../img/logiciel.png";
  document.getElementById('input_img2').removeAttribute('src');
  document.getElementById('input_img3').removeAttribute('src');
  document.getElementById('input_img1').removeAttribute('src');
  document.getElementById('inputcode').value= "";
  

};





function refresh(){
  location.reload();
};









