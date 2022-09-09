/*7.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el planeta
yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte,
como distractor el imperio ha creado planos falsos y se tiene el dato de
que el número de serie de estos planos falsos comienza por encima del
número 10; es decir todos los planos falsos tienen números de serie
consecutivos comenzando desde el #11. SOLO si se obtiene un plano
verdadero Chewbacca y Han pueden abordar su nave y ejecutar un
mensajeen consola avisando que han despegado
Configure la rutina necesaria para despegar la nave utilizando callbacks */

function encontrarPlanos(planos,arrancarnave){
 let filtro = planos.filter(function(plano){
    return plano>1 & plano <= 10
 })
  arrancarnave(filtro)
}

let planos = [14,114,24,12,51,51,0,5,6,12]
encontrarPlanos(planos,function(filtro){
    let cuenta = filtro.length
    if(cuenta >0){
        console.log("arrancando la nave")
        }
    else{
        console.log("no arranca ")
    }
})
