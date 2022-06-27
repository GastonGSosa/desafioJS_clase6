
/* Creo clase Personal */
class Personal {
    constructor (nombre, auto, historia="No se sabe.",sueldo=100,calificacion=5){
        this.nombre=nombre
        this.auto=auto
        this.historia=historia
        this.sueldo=sueldo
        this.calificacion=calificacion
    }
    /* Creo un método para poder aumentar el sueldo */
    aumentar_sueldo(porcentaje=1.35){
        this.sueldo *= porcentaje
    }
    despedir(){
        alert("El chofer " + this.nombre + " fue despedido.")
    }
}

/* Creo varias constantes con objetos */
const chofer1 = new Personal("Jorge","Toyota Corolla SEG","Manejo bien, agradable, auto limpio.")
const chofer2 = new Personal("Chano","Mercedes Benz SLK320","Manejó rápido, casi choco 2 veces, no se entendía lo que hablaba, había caramelos de dudoso contenido.")
const chofer3 = new Personal("Ricardo","Honda SRV","Manejaba un poco lento, hablaba mucho pero agradable, auto grande y cómodo.")
const chofer4 = new Personal("Alberto","Renault 12","Se perdió 3 veces, se la pasó señalando con el dedo a la gente, el auto estaba destrozado, me cobró más de lo que debía.")
const chofer5 = new Personal("Hugo","Camión Ford F100","Se nota que maneja hace mucho, se la paso hablando de Independiente, me llevó en la parte de atrás y subió más gente.")
const chofer6 = new Personal("Javier","Tesla Model S 2021")

/* Ingreso esos objetos a un array */
const choferes=[chofer1,chofer2,chofer3,chofer4,chofer5,chofer6]
const nombres=[]

/* Primero anuncio... como para que se sepa qué hay que hacer, no me convence mucho, 
pero probando con mi mujer me dijo que no sabía que tenía que poner OK todo el tiempo ja */
alert("Hola! Usted está calificando los viajes que ha tenido durante el mes en Rebu, este es el resumen:")

/* Itero por el array */
for (const chofer of choferes) {
    /* Creo una variable para la nueva calificacion */
    let nuevaCalificacion
    /* por cada iteración, creo una serie de alertas que van "contando la historia" para luego pedir un input entre 1 y 5 */
    alert("Viaje número "+ (choferes.indexOf(chofer)+1))
    alert("A usted lo llevo el chofer: "+chofer.nombre)
    alert("El vehículo fue un "+chofer.auto)
    alert("Esto fue lo que sucedió en su viaje...")
    alert(chofer.historia)
    /* Pido el input */
    do {
        nuevaCalificacion=parseInt(prompt("Por favor, en base a la experiencia, califique al chofer del 1 al 5"))
    } while (nuevaCalificacion<1 || nuevaCalificacion>5 || isNaN(nuevaCalificacion))
    /* Asigno el input como una nueva calificación e informo al final del ciclo */
    chofer.calificacion=nuevaCalificacion
    nombres.push(chofer.nombre)
    alert("Gracias!")
}

/* Informo el siguiente paso */
alert("Gracias por su participación!")
alert("Con las calificaciones que nos ha brindado, hemos tomado acciones con el personal...")

/* Itero a través de los objetos buscando calificaciones 1, si las hay, los agrego al array de despedidos, y luego borro el elemento del array choferes */
for (let i=0; i<nombres.length;i++){
    if (choferes[i].calificacion===1){
        choferes[i].despedir()
    }
    else if (choferes[i].calificacion===5){
        alert("El chofer "+nombres[i]+" recibió un aumento del 35%")
        choferes[i].aumentar_sueldo()
    }
    else {
        alert("El chofer "+nombres[i]+" seguirá brindando sus servicios.")
    }
}

console.table(choferes)

