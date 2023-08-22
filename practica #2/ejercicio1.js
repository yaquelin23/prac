/*let numeros =[]
let otrosNumeros=[]
let arrayFinal=[]
for(let i=1; i<=100;i++){
    let mensaje=`E valor es :${i}`
    numeros.push(mensaje)
}

for(let i=1; i<=200;i++){
    let mensaje=`E valor es :${i}`
    otrosNumeros.push(mensaje)
}

arrayFinal=[...numeros,...otrosNumeros]

arrayFinal.forEach((i)=>{
    console.log(i)
})*/

let persona1= {
    nombre:`yaquelin`,
    edad:`17`,
    carrera:`ing.des.software`
}

let persona2={
    nombre:`yaquelin`,
    edad:`17`,
    carrera:`ing.des.software`
}

let persona3={
    nombre:`yaquelin`,
    edad:`17`,
    carrera:`ing.des.software`
}

let arrayObjetos=[persona1,persona2,persona3]

arrayObjetos.forEach((i) => {
    console.log(i)
})
console.log(arrayObjetos[0].nombre)

//imprimir rl nombre de la paosicion 0
//imprimir