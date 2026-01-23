import { NgStyle } from '@angular/common';
import { Component, computed, signal} from '@angular/core';

interface Character { 
  id:number;
  name: string;
  power: number;
}

@Component({
  imports: [NgStyle],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);
  
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },    
  ]);

  addPersonatge() {
    //console.log('Character added:', this.name(), this.power() );
    if(!this.name() || !this.power() || this.power() <= 0 ) {
      return; 
    }  
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update(chars => [...chars, newCharacter]);  
    this.name.set('');
    this.power.set(0);  
  }
  
  powerStyles = computed(() => {
    const chars = this.characters();
    const styles: Array<Record<string, string>> = new Array(chars.length);
    for (let i = 0; i < chars.length; i++) {
      const p = chars[i].power;
      // Tria els colors que vulguis; aquí poso un exemple tipus Bootstrap
      if (p < 7000) {
        styles[i] = { color: '#dc3545', 'font-weight': '600' }; // danger = vermell
      } else if (p <= 9000) {
        styles[i] = { color: '#ffc107', 'font-weight': '600' }; // warning = groc/ambre
      } else {
        styles[i] = { color: '#0d6efd', 'font-weight': '600' }; // primary = blau
      }
    }
    return styles;
  });

  
} 
