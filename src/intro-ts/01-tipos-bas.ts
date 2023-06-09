//El 'const' nunca va a cambiar
let nombre :string = "RCR"
//nombre=35
let datos:string|number = 95
//console.log(nombre)
datos = "IDGS123"
let vivo:boolean=false
//Archivo1
//Objetos, arreglos, interfaces

// any Variable -> cualquier tipo de dato
let mascotas=['perro','gato',100,true]
let tem:(boolean|number|string)[]=['aaaa',100,false]
//? -> Tipo de dato opcional
interface Persona{
    nombre:string;
    grupo:string;
    edad:number;
    materias:string[];
    activo?:string;
}

let nombres:string[]=['Juan','Pedro','Mario']

const alumno:Persona={
    nombre:'Mario',
    grupo:'IDGS123',
    edad:23,
    materias:['Español']
}
alumno.activo="inscrito"

//console.log(alumno)
//console.table(alumno)

let vector:number[]=[1,4,3]
vector[2]=8
vector.push(9)
for(let elemento of vector){
    //console.log(elemento)
}
//console.log(vector)