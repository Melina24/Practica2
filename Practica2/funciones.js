function myFunction(){
   document.getElementById("demo").innerHTML = "Es una fruta deliciosa!.";

}
function myFunction1(){
   document.getElementById("demo1").style.fontSize = "30px";

}
function myFunction2(){
   document.getElementById("demo2").style.display = "none";
}

function myFunction3(){
   document.getElementById("demo3").style.backgroundColor= "yellow";

}

function myFunction4(){
   document.getElementById("demo4").style.border="solid red";

}
function myFunction5(){
   document.getElementById("demo5").style.color="purple";

}

function sumar(){
   var a=Number(document.getElementById("entrada1").value);
   var b=Number(document.getElementById("entrada2").value);
   alert(a+b);
}

function restar(){
   var a=document.getElementById("entrada1").value;
   var b=document.getElementById("entrada2").value;
   alert(a-b);
}

function multiplicar(){
   var a=document.getElementById("entrada1").value;
   var b=document.getElementById("entrada2").value;
   alert(a*b);
}
function dividir(){
   var a=document.getElementById("entrada1").value;
   var b=document.getElementById("entrada2").value;
   alert(a/b);
}


function actual() {
         fecha=new Date(); //Actualizar fecha.
         hora=fecha.getHours(); //hora actual
         minuto=fecha.getMinutes(); //minuto actual
         segundo=fecha.getSeconds(); //segundo actual
         if (hora<10) { //dos cifras para la hora
             hora="0"+hora;
             }
         if (minuto<10) { //dos cifras para el minuto
             minuto="0"+minuto;
             }
         if (segundo<10) { //dos cifras para el segundo
             segundo="0"+segundo;
             }
         //devolver los datos:
         mireloj = hora+" : "+minuto+" : "+segundo;	
         return mireloj; 
         }
function actualizar() { //función del temporizador
   mihora=actual(); //recoger hora actual
   mireloj=document.getElementById("reloj"); //buscar elemento reloj
   mireloj.innerHTML=mihora; //incluir hora en elemento
	 }
setInterval(actualizar,1000); //iniciar temporizador





