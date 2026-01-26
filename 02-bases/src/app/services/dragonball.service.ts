import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// const loadFromLocalStorage = (): Character[] => {
//   const personatges = localStorage.getItem('personatges');
//   return personatges ? JSON.parse(personatges) : [];
// };

// function loadFromLocalStorage(): Character[] {
//     const personatges = localStorage.getItem('personatges');
//     return personatges ? JSON.parse(personatges) : [];
//   };

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  constructor() { }

  characters = signal<Character[]>(this.loadFromLocalStorage());

//   characters = signal<Character[]>([
//     { id: 1, name: 'Goku', power: 9001 },
//     { id: 2, name: 'Vegeta', power: 8500 },
//   ]);

   addCharacter(character: Character) {
    this.characters.update(chars => [...chars, character]);
  }

   //5.61: effect per afegir personatges al localstorage:
  saveToLocalStorage= effect(() => {
    const chars = this.characters();
    localStorage.setItem('personatges', JSON.stringify(chars));
    console.log(`Quantitat de personatges: ${chars.length}`);
  });

  //5.62: funció per carregar personatges del localstorage
  loadFromLocalStorage(): Character[] {
    const personatges = localStorage.getItem('personatges');
    return personatges ? JSON.parse(personatges) : [];
  };
}