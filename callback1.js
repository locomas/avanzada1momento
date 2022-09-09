


alimentos = []

function crearAlimento(nombre,tipo,energia){

   
 
    guardian = 0

    let datosAlimentos = {
        nombre:nombre,
        tipo : tipo,
        energia: energia
    }

       alimentos.push(datosAlimentos)
       
   
}




crearAlimento("Chunchurria","animal",300)
crearAlimento("Pizza","animal",400)
crearAlimento("Cilantro","vegetal",200)
crearAlimento("Hamburguesa","animal",600)
crearAlimento("Pollo","animal",500)
crearAlimento("Platano","vegetal",200)
crearAlimento("Queso","animal",200)
crearAlimento("Mazamorra","vegetal",400)
crearAlimento("Sancocho","mixto",300)
crearAlimento("Mariscos","animal",300)
crearAlimento("Maiz","vegetal",600)
crearAlimento("Zanahorira","vegetal",600)
crearAlimento("Repollo","vegetal",500)
crearAlimento("Pavo","animal",600)
crearAlimento("Pescado","animal",800)
crearAlimento("Cebolla","vegetal",400)
crearAlimento("Maduro","vegetal",500)
crearAlimento("Brocoli","vegetal",400)

console.log("Esta es la lista de los alimentos")





console.log(alimentos)

function filtrar(alimentos,sumar){

      let filtro = alimentos.filter(function(alimento){
        return alimento.energia>200 & alimento.tipo =="vegetal"
      })

      console.log(filtro)

      sumar(filtro)

      return filtro
    }

filtrar(alimentos,function(sumatoria){
       let cuenta = sumatoria.length 
       console.log(cuenta)
       const sumall = sumatoria.map(item => item.energia).reduce((prev, curr) => prev + curr, 0);
       console.log("Grogu se traga un total de "+ sumall + " calorias el berriondo");


       } )
l
  


