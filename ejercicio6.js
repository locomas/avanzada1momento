/* 6.PROBLEMA: Yoda el maestro jedi, necesita asignar a sus aprendices
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años */

function crearPracticante(nombre,planeta,edad,estatura,clasificar){

    let datosPracticante ={
        nombre:nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura,
    }

    clasificar(datosPracticante)
}

crearPracticante("Mario","Marte",16,1.76,function(practicante){
    if(practicante.edad>= 15){
        console.log("Usted se va para la clase de luz")
    }
    else {
        console.log("Usted se va para la clase de fuerza")
    }
})