import { NgStyle } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import type { Character } from '../../interfaces/character.interface';
// import type { PowerStyle } from '../../interfaces/powerStyle.interface';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

// interface PowerStyle extends Record<string, string> {          
//   color: string; 
//   'font-weight': string;
// }

// interface Character { 
//   id:number;
//   name: string;
//   power: number;
// }

@Component({
  imports: [/*NgStyle,*/ CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {

   public dragonballService = inject(DragonballService);
  //constructor( public dragonballService:DragonballService) {}

 

  // characters = signal<Character[]>([
  //   // { id: 1, name: 'Goku', power: 9001 },
  //   // { id: 2, name: 'Vegeta', power: 8500 },
  // ]);

  //  addCharacter(character: Character) {
  //   this.characters.update(chars => [...chars, character]);
  // }

  // name = signal('');
  // power = signal(0);

  // powerStyles = signal([
  //   { color: '#ff0000', 'font-weight': 'bold' },
  //   { color: '#00ff00', 'font-weight': 'normal' },
  //   { color: '#0000ff', 'font-weight': 'bold' }
  // ]);

  //  powerStyles = signal(<PowerStyle[]>[
  //   { color: '#ff0000', 'font-weight': 'bold' },
  //   { color: '#00ff00', 'font-weight': 'normal' },
  //   { color: '#0000ff', 'font-weight': 'bold' }
  // ]); 

  //  addPersonatge() {
  //   //console.log('Character added:', this.name(), this.power() );
  //   if (!this.name() || !this.power() || this.power() <= 0) {
  //     return;
  //   }
  //   const newCharacter: Character = {
  //     id: this.characters().length + 1,
  //     name: this.name(),
  //     power: this.power(),
  //   };
  //   this.characters.update(chars => [...chars, newCharacter]);
  //   this.name.set('');
  //   this.power.set(0);
  // }

  // powerStyles = computed(() => {
  //   const chars = this.characters();
  //   const styles: Array<Record<string, string>> = new Array(chars.length);
  //   for (let i = 0; i < chars.length; i++) {
  //     const p = chars[i].power;
  //     // Tria els colors que vulguis; aquí poso un exemple tipus Bootstrap
  //     if (p < 7000) {
  //       styles[i] = { color: '#dc3545', 'font-weight': '600' }; // danger = vermell
  //     } else if (p <= 9000) {
  //       styles[i] = { color: '#ffc107', 'font-weight': '600' }; // warning = groc/ambre
  //     } else {
  //       styles[i] = { color: '#0d6efd', 'font-weight': '600' }; // primary = blau
  //     }
  //   }
  //   return styles;
  // });
} 
