import  type { Product, TaxOptions} from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';


const shoppingCard : Product[] = [
    { id: 1, name: 'iphone', price: 500.00 },
    { id: 2, name: 'Laptop', price: 700.00 },
    { id: 3, name: 'ipad', price: 300.00 }           
];

const taxRate: number = 0.1; // 10% de taxa

const options: TaxOptions = {           
    products: shoppingCard, 
    taxRate: taxRate,
    discount: 50 // Descompte de 50 unitats monetaries
};

const [ total, tax, finalTotal ] = taxCalculation(options);


console.log('Importat des de topics/06-function-destructuring.ts,' +
     'amb destructuring:const [ total, tax, finalTotal ] = taxCalculation(options);');   
console.log('Total: $' + total.toFixed(2));
console.log('Tax: $' + tax.toFixed(2));
console.log('Final Total: $' + finalTotal.toFixed(2));  

const dades= taxCalculation(options);

console.log('Importat des de topics/06-function-destructuring.ts. '+
    'Mostra els valors de retorn per posicio del array mes 2 decimals: dades[0].toFixed(2)...');
console.table('Total: $' +dades[0].toFixed(2));
console.table('Tax: $' +dades[1].toFixed(2));
console.table('Final Total: $' +dades[2].toFixed(2));  

console.log('Importat des de topics/06-function-destructuring.ts.'+
    'Mostra l\'objecte {dades} que recull el valor de retorn del metode: const dades= taxCalculation(options)');
console.log({dades});  

console.log('Importat des de topics/06-function-destructuring.ts. Crida directa al metode');
console.log(taxCalculation(options));