import { Component, signal} from '@angular/core';

interface Character { 
  id:number;
  name: string;
  power: number;
}

@Component({
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Piccolo', power: 6500 },
    { id: 5, name: 'Frieza', power: 12000 },
  ]);

}
