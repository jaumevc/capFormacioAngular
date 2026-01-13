import { Component } from "@angular/core";

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
    protected increase(): void {
        this.counter += 1;
    }
    protected decrease(): void {
        this.counter -= 1;
    }

    protected reset(): void {
        this.counter = 10;
    }
}
