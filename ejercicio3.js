/* : La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día  */

let calculatemp = (min,max)=> (min + max)/2 
let res =  calculatemp(50,50)
console.log(`la temperatura promedio es:${res}`)