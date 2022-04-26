//Binvenida:
alert ("Bienvenido!");

//verificador de edad:

let edad = prompt("¿que edad tienes?");

    if(edad >=18){
        alert("comencemos a trabajar porque: La casualidad no es más que el destino disfrazado de inocencia.");

    } else{
        while (edad <18){
            alert("los siento, pero  vuelve con un adulto");
            edad = prompt("¿que edad tienes?");
        }
    }

//valor del servicio 

alert ("trabajamos por horas...");

let horasCliente = parseInt(prompt("¿cuantas horas quieres invertirt a la semana?"));

let valorPorHora = 500;

function calcular(horasCliente,valorPorHora ) {
    
    let valorFinal = valorPorHora*horasCliente ;

    return valorFinal;
}

let valorDelServicio = (calcular(horasCliente,valorPorHora ));

alert("Seria un total de: "+"$"+ valorDelServicio );


//servicios:
class ServiciosPropiedades{
   
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo =tipo;
   }
}

const Gp = new ServiciosPropiedades ("Grupo operativo", "virtual");

const Ai = new ServiciosPropiedades ("Analisis institucional", "presencial");

const Sp = new ServiciosPropiedades ("Seciones personalizadas", "virtual");

//arrays

 const Servicios = [Gp,Ai,Sp];

 alert ("nuestros servicios son:");
 alert (Gp.nombre);
 alert (Ai.nombre);
 alert (Sp.nombre);

