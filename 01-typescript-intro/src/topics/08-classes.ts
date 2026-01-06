
export class Person{
    // public name: string|undefined;
    // public adress?: string;
    // private age?: number;

    // constructor(name: string, adress: string, age?: number){
    //     this.name = name; 
    //     this.adress = adress;
    //     this.age = age;
    // }

    constructor(public name: string, public adress: string, private age?: number){ }
}
   
//const person1 = new Person();
//console.log('Person Name:', person1.name);
//console.log('Person Adress:', person1.adress);
//console.log('Person Age:', person1.age); // Error: 'age' is private

const person2 = new Person('Jaume', 'Lleida', 54);

// console.log('Person Name:', person2.name);
// console.log('Person Adress:', person2.adress);
//console.log('Person Age:', person2.age); 

// export class Hero extends Person{ 
//     constructor(public mot: string, public vacationalAdress: string, public money:number){
//         super(mot, 'Torredembarra', 45);
//     }
// }

// export class Hero { 

//     public person: Person;

//     constructor(public mot: string, public vacationalAdress: string, public money:number){
//        this.person = new Person(mot, 'Torredembarra', 45);
//     }
// }

export class Hero { 
    
    //public person: Person;

    constructor(
        public mot: string, 
        public vacationalAdress: string, 
        public money:number,
        public person: Person   
    ){
       //this.person = new Person(mot, 'Torredembarra', 45);
    }
}

const person3 = new Person('Jaume', 'Lleida', 54);
const hero1 = new Hero('Peter Parker', 'New York', 21, person3);

console.log('Hero name:', hero1.mot);
console.log('Hero vacationalAdress:', hero1.vacationalAdress);
console.log('Hero money:', hero1.money);
console.log('Hero name:', hero1.person.name);
console.log('Hero adress:', hero1.person.adress);
//console.log('Hero Age:', hero1.person.age);