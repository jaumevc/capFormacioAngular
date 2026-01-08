export interface Passanger{
    name: string;
    //Un passatger tindrà fills OPCIONALMENT -> ?
    children?:string[];

}

const passanger1: Passanger = {
    name: 'John Doe',
};
const passanger2: Passanger = {
    name: 'Jane Doe',
    children: ['Child 1', 'Child 2'],
};      

function printChildren(passanger: Passanger): void {
    //Utilitzant l'optional chaining per accedir a children
    //AIXÒ ES LLEGEIX COM: SI PASSANGER.TÉ CHILDREN, AGAFA LA LLARGADA, SINO 0
    const howManyChildren = passanger.children?.length || 0;
    console.log(`El passatger ${passanger.name} té ${howManyChildren} fills.`);
}   
printChildren(passanger1); // El passatger John Doe té 0 fills.
printChildren(passanger2); // El passatger Jane Doe té 2 fills.

console.log('--------Amb funcio feltxa-----------:');
//TAMBÉ HO PODEM USAR COM UNA FUNCIÓ DE FLETXA:
const printChildrenArrow = (passanger: Passanger): void => {
    const howManyChildren = passanger.children?.length || 0;
    console.log(`El passatger ${passanger.name} té ${howManyChildren} fills.`);
}   

printChildrenArrow (passanger1); // El passatger John Doe té 0 fills.
printChildrenArrow (passanger2); // El passatger Jane Doe té 2 fills.

//si estic segur que sempre rebre un objecte amb children.
const returnChildrenArrow = (passanger: Passanger): number => {
    const howManyChildren = passanger.children!.length;
    console.log('Nº de fills de passanger2:', howManyChildren);
    return howManyChildren;
}  

returnChildrenArrow (passanger2); // 2
// returnChildrenArrow (passanger1); // ERROR EN TEMPS D'EXECUCIÓ!!!   
 console.log('Nº de fills de passanger2 + 2 fills més:', returnChildrenArrow (passanger2)+2);// 2