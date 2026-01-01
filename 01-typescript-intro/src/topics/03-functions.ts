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


// video 3.15:
console.log('video 3.15:\n');
interface Personatge{
    nom:string;
    puntuacio:number;
    mostrarPunts: () => void;
};

const jugador:Personatge /*:Personatge*/ ={
    nom: 'Super Jaume', //'Hiper Susana',
    puntuacio: 25,
    mostrarPunts(){
        console.log('Vaig primer amb'+' : '+this.puntuacio+' punts.');
    }
};

const curar = (perso:Personatge, quantitat:number)=>{
    perso.puntuacio += quantitat;
};

curar(jugador, 35);

jugador.mostrarPunts();

console.table({jugador});


