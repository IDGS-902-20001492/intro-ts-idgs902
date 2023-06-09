//Desestructuracion de objetos y arreglos
interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}
interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1:12345,
    nombre:'Mario',
    edad:23,
    correo:'mario@gmail.com',
    grupo:{
        grupo:'123',
        year:2023
    }
}
//console.log(`La matricula es: ${alumno2.matricula1}`)
//console.log(`El año del grupo es: ${alumno2.grupo.year}`)

//Desestructuracion de objetos
const {matricula1,grupo:xx}=alumno2;
const {grupo,year:annio}=xx;

console.log(`La matricula es: ${matricula1}`)
console.log(`El nombre del grupo es: ${alumno2.nombre}`)
console.log(`El grupo es: ${grupo}`)
console.log(`El año del grupo es: ${annio}`)

//Desestructuracion de arreglos

const gps:string[]=['IDGS','IEVN','REDES']
console.log(`Grupo 1: ${gps[0]}`)
console.log(`Grupo 2: ${gps[1]}`)
console.log(`Grupo 3: ${gps[2]}`)

const[a,,b] = gps;
console.log(`Grupo 1: ${a}`)