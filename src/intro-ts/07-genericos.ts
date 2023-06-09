class PilaEnteros{
    private vec:number[]=[];
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}
class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}
//Solo se extraen los ultimos elementos

//Enteros
let pila1:PilaEnteros;
pila1=new PilaEnteros();
pila1.insertar(23);
pila1.insertar(23);
pila1.insertar(3);
console.log(pila1.extraer());
//Cadenas
let pila2:PilaString;
pila2=new PilaString();
pila2.insertar('Juan');
pila2.insertar('Pedro');
pila2.insertar('Mario');
console.log(pila2.extraer());

//Clase generica
class PilaGenerica<T>{
    private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}

let pila3:PilaGenerica<number>;
pila3=new PilaGenerica();
pila3.insertar(23);
pila3.insertar(23);
pila3.insertar(3);
console.log(pila3.extraer());

let pila4:PilaGenerica<string>;
pila4=new PilaGenerica();
pila4.insertar('23');
pila4.insertar('23');
pila4.insertar('3');
console.log(pila4.extraer());