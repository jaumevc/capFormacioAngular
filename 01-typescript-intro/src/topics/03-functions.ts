export function addNumbers( a:number, b:number ){
    //puc fer la concatenacio amb '+'
    console.info('els parametres enviats a la funció (concatenant amb +), són: '+a+' i '+b);
    //puc fer la concatenacio usant ``i els valors dels arguments en ${a} i ${b}
    console.info(`els parametres enviats a la funció (concatenant amb `+'${}'+`), són: ${a} i ${b}`);
    return a + b
};

// const result = addNumbers(2, 3);
// console.log({result});

const addNumbersFletxa = (a:number, b:number):string=>{
    return `el resultat es: ${a + b}`;
};

const resultFletxa:string = addNumbersFletxa(5,5);

console.log({funcioFletxa: resultFletxa});

function multipply(param1:number, param2?:number, param3:number = 2) :number{
    return param1 * param3;
};

const producte = multipply(7);
console.log({multiplicacio: producte});