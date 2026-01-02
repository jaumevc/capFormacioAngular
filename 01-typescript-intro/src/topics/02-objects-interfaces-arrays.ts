
const skills: string[] =['jaume', 'susana', 'mariona', 'ares'];

interface defTipus {
    name:string;
    hp:number;
    altres:boolean;
    skills:string[];
    localitat?:string;
}

const objecte : defTipus={
    name: 'Jaume',
    hp:100,
    altres: true,
    skills:['guapo', 'patidor'] ,
};

console.log(objecte);

objecte.localitat = 'Lleida';

console.log(objecte);

console.table(objecte);






export {};
