import { Component, signal, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  
  // Event emitter per comunicar amb el component pare
  characterAdded = output<Character>();

  addPersonatge() {
    //console.log('Character added:', this.name(), this.power() );
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: Math.random(), // Millorar després amb un ID adequat
      name: this.name(),
      power: this.power(),
    };
    // Emetem l'event al component pare
    this.characterAdded.emit(newCharacter);
    // Netejem els camps
    this.name.set('');
    this.power.set(0);
  }
}
