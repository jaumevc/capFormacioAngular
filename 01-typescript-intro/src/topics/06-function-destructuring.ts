
export interface Product {
    id: number;
    name: string;
    price: number;
}   

const phone: Product = {
    id: 1,
    name: 'Smartphone',
    price: 699.99
}; 

const laptop: Product = {
    id: 2,
    name: 'Laptop',
    price: 1299.49
};  


function printProductDetails({ id, name, price }: Product): void {
    console.log(`Product ID: ${id}`);
    console.log(`Product Name: ${name}`);
    console.log(`Product Price: $${price.toFixed(2)}`);
} 

// printProductDetails(phone);
// printProductDetails(laptop);

const shoppingCard: Product[] = [phone, laptop];
const taxRate: number = 0.15;

function calculateTotalWithTax(shoppingCard:Product[], taxRate: number): number {
    let total = 0;  
    for (const product of shoppingCard) {
        total += product.price;
    }
    return total + (total * taxRate);
}

// console.log('valor de la compra inclòs taxes: '+ calculateTotalWithTax(shoppingCard, taxRate));

// console.log('PREPARANT EXEMPLE AMB DESESTRUCTURACIÓ D\'OBJECTES EN PARÀMETRES D\'UNA FUNCIÓ (x capitol 3.20):');

export interface TaxOptions {
    products: Product[];
    taxRate: number;
    discount?: number;
}

//function taxCalculation(options: TaxOptions): number[] {
//function taxCalculation({ products, taxRate, discount = 0 }: TaxOptions): [number, number, number] {
export function taxCalculation(options: TaxOptions): [number, number, number] {
    const { products, taxRate, discount = 0 } = options;
    
    let total = 0;

    // for (const product of products) {
    //     total += product.price;
    // }
    // options.products.forEach(product => {
    //     total += product.price;
    // });
    // options.products.forEach(({ price }) => {
    //     total += price;
    // });
    products.forEach(({ price }) => {
        total += price;
    });

    const tax = total * taxRate;
    const finalTotal = total + tax - discount;
    return [total, tax, finalTotal];
}





// const results = taxCalculation({
//     products: shoppingCard,
//     taxRate: 0.21,
//     discount: 50
// });

// console.log('Subtotal: $' + results[0].toFixed(2));
// console.log('Tax: $' + results[1].toFixed(2));
// console.log('Final Total: $' + results[2].toFixed(2));  

// console.log('3.20 - RESULTATS DESESTRUCTURACIÓ DELS RETORNATS PER LA FUNCIÓ taxCalculation():');
// const [subtotal, tax, finalTotal] = taxCalculation({
//     products: shoppingCard,
//     taxRate: 0.10,
// });

// console.log('Subtotal (desestructurat): $' + subtotal.toFixed(2));
// console.log('Tax (desestructurat): $' + tax.toFixed(2));
// console.log('Final Total (desestructurat): $' + finalTotal.toFixed(2)); 

