
export function whatsMyType<T>(argument: T):T { //la ):T  {de retorn no seria necessaria indicar-la
    return argument;
}

//const socString = whatsMyType<string>(123);
const socNombre = whatsMyType<number>(150);
const socArray = whatsMyType([1,5,0]);

//console.log('socString convertit a array amb split:', socString.split(' '));
console.log('socNombre', socNombre);
console.log('socArray', socArray);