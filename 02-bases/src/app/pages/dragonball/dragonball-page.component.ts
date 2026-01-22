import { /*NgClass,*/ NgStyle } from '@angular/common';
import { Component, computed, signal} from '@angular/core';

interface Character { 
  id:number;
  name: string;
  power: number;
}

@Component({
  imports: [/*NgClass,*/NgStyle],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {

  name = signal('Dragon Ball Z');
  power = signal(10000);
  

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Piccolo', power: 6500 },
    { id: 5, name: 'Frieza', power: 12000 },
  ]);

//   powerClasses = computed(() => {
//     const chars = this.characters();
//     const classes: string[] = new Array(chars.length);
//     for (let i = 0; i < chars.length; i++) {
//       classes[i] = chars[i].power < 7000 ? 'text-danger' : 'text-primary';
//     }
//     return classes;
// });

  // powerClasses = computed(() => {
  //   return { 'text-primary': true };
  // });

  
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