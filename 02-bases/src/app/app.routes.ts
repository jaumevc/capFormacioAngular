import { Routes } from '@angular/router';
import { count } from 'rxjs';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';


export const routes: Routes = [
   { path: '', component: CounterComponent },
   { path: 'hero', component: HeroPageComponent }, 
];
