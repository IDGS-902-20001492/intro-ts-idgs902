let vector1:Array<number>=[9,8,7,6]
vector1.push(10)
vector1[1]=22
for(let tem of vector1)
    console.log(tem)
///----------------------------------//
let tem1:(number|string)[]=[]
tem1.push('mario')
tem1.push(123)
//-----------------------------------//
interface Alumno{
    matricula?:number;
    nombre:string;
    edad:number;
    email:string;
}       

const alumno1:Alumno={
    matricula:1234,
    nombre:'Mario',
    edad:23,
    email:'mario@gmail.com'
}