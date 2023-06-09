//FUNCIONES
//                           ¬> tipo de dato que debe regresar
function suma(a:number,b:number):number{
    return a+b
}

const sumaFlecha=(a:number,b:number):number =>{
    return a+b
}
//                                                 ----> Solo toma este valor cuando no se manda este parametro
function multiplicar(numero1:number,_numero2?:number, base:number=2):number{
    return numero1*base;
}
const resultado2= multiplicar(5,0,10)
const resultado = suma(3,5)

//Declaramos un objecto
/*
interface Persona{
    nombre:string;
    edad:number;
    grupo:()=>void;
}
function UTL(alumno:Persona, _cuatrimestre:number):void{
    alumno.edad=23;
    console.log(alumno);
}

const NuevoAlumno:Persona={
    nombre:'Mario',
    edad:25,
    grupo(){
        cocnsole.log('IDGS123',this.edad)
    }
}

UTL(NuevoAlumno,44)*/

//funcion anonima
const funcSumar=function(n1:number,n2:number):number{
    return n1+n2
}
//console.log(funcSumar(4,9))

function calcular(n1:number,n2:number,n3?:number):number{
    if(n3){
        return n1+n2+n3
    }else{
        return n1+n2
    }
}
//console.log(calcular(3,2,5))

//console.log(calcular(3,2))


function calcular2(...valores:number[]){
    let suma = 0;
    for(let i=0;i<valores.length;i++){  
        suma += valores[i];
        return suma;
    }
}
//console.log(calcular2(10,2,3,4))
//console.log(calcular2(1,2))