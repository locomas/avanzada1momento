/* 4. PROBLEMA: QUI-GON JINN está encargado de revisar n sables
de luz y contabilizar la cantidad de energía de sables que tienen
negativa en Joules.

Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
defectuosos con energía negativa fue de 2 sables.
*/

let arreglosables = [0,4,5,6,7,-9,-8]
let menor = arreglosables.filter(element => element < 0);
console.log(`El numero de sables negativos es ${menor.length}`)