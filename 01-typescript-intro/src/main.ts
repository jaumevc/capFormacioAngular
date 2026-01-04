import './style.css';
import './topics/01-basic-types';
import './topics/02-objects-interfaces-arrays';
//import './topics/03-functions';
import { addNumbers } from './topics/03-functions'; 
import './topics/04-tasca-types';
import './topics/05-basic-destructuring';
import './topics/06-function-destructuring';

const app = document.querySelector<HTMLDivElement>('#app')!;
const result = addNumbers(2, 3);

app.innerHTML = `
    <h2>Hola Mon Mundial</h2>
    <p>El resultat d'addNumbers(2, 3) és: <strong>${result}</strong></p>
`;

console.log('consolant Jaume');


