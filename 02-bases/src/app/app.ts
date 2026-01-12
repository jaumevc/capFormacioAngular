import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //opcional
  imports: [RouterOutlet],//opcional
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('02-bases');
}
