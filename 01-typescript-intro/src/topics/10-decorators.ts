function myDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    // return class extends constructor {
    //     constructor(...args: any[]) {
    //         super(...args);
    //     }
    // };  
    return class extends constructor {
        newProperty = 'XYZ789';
        hello = 'Hello World';
    }; 
}

//@service ó @component ó @module etc
@myDecorator
export class SuperClass {
   
    public myProperty: string = 'Abc123';  

    print(){
        console.log('Mètode de la SuperClass');
    }         
}

//Daquesta manera imprimeixo la definicio de la classe
console.log( SuperClass );

//Aqui creo una instància i la imprimeixo
const myInstance = new SuperClass();
console.log( myInstance );



