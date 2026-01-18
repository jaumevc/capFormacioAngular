import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/shared/navbar/navbar";

@Component({
  selector: 'app-root', //opcional
  imports: [RouterOutlet, Navbar],//opcional
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('02-bases');
}
