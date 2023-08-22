//ejercicio #1
let edad=prompt("introduzca su edad: ")

if(edad > 18 && edad<=100){
    alert("El usuario es mayor de edad")
}else if(edad<18 && edad >=1){
    alert("El usuario es menor de edad")
}else if(edad==18){
    alert("El usuario tiene 18")
}else if(edad>100){
    alert("El usuario es centenario")
}else if(edad<=0){
    alert("Edad invalida")
}

//ejercicio #2
let i = 1;
let suma = 0;
while(i <= 100){
    suma += i;
    i++;
}
alert(suma)


//ejercicio #3
let num=prompt("Escriba un numero: ")
for(i=1; i=10; i++){
    alert(num + "*" + i + "=" + (num*i))
}
