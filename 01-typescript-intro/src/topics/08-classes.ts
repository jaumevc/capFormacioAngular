
export class Person{
    public name: string|undefined;
    public adress?: string;
    private age?: number;

    constructor(){
        this.name = "John"; 
        this.adress = "123 Main St";
        this.age = 30;
    }
}
   
const person1 = new Person();
console.log('Person Name:', person1.name);
console.log('Person Adress:', person1.adress);
console.log('Person Age:', person1.age); // Error: 'age' is private
