/* 2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de
acceso a las naves de guerra los cuáles reposan en la base de datos
central, para ello debe programar una función que permita recibir la
palabra clave de cada nave y separar imprimiendo solo el nombre del
piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn

*/

function obtenerPiloto(basedatos){
    let resultado =  basedatos.split(":")[1]
    return resultado
    }
    
    //LLamando a la funcion
    let resultado = obtenerPiloto("ARQ2555:Sara Bel-Sun")
    obtenerPiloto("AARQ2556:Nodin Chavdri")
    obtenerPiloto("ARQ2557:Finn")
    
    console.log (resultado)
    