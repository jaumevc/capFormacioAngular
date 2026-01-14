import { Component, signal } from "@angular/core";

@Component({
    // template: `
    // <h1>Counter Page</h1>
    // <h2>CounterComponent page</h2>
    // <h3>Counter: {{ counter }}</h3>
    // <button (click)="increase()">+1</button>
    // <button (click)="decrease()">-1</button>
    // <button (click)="reset()">Reset</button>
    // `
    templateUrl: './counter.component.html',
    // styles:`
    //     button {
    //         background-color: #007bff;
    //         color: white;
    //         border: none;
    //         padding: 10px 20px;
    //         margin: 5px;
    //         cursor: pointer;
    //     }
    //     button:hover {
    //         background-color: #0056b3;
    //     }   
    // `
    styleUrl: './counter.component.css',
})  
export class CounterComponent {

    protected counter = 10;

    counterSignal = signal(10);

    protected increase(value:number): void {
        this.counter += value;
        // es recomana usar 'update' per evitar problemes de rendiment enlloc 
        // de set perque aquest reseteja el valor anterior
        //this.counterSignal.set( this.counterSignal() + this.counterSignal());
       this.counterSignal.update((currentValue) => currentValue + value);
    }
    protected decrease(): void {
        this.counter -= 1;
    }

    protected reset(): void {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}
