import { Routes } from '@angular/router';
import { count } from 'rxjs';
import { CounterComponent } from './pages/counter/counter.component';

export const routes: Routes = [
   { path: '', component: CounterComponent },
];
