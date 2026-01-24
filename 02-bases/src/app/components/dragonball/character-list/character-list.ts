import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';
import type { PowerStyle } from '../../../interfaces/powerStyle.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [NgStyle],
  templateUrl: './character-list.html',
})
export class CharacterList {
characters = input.required<Character[]>();
powerStyles = input.required<PowerStyle[]>();
}
