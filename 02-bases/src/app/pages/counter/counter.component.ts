import { Component } from "@angular/core";

@Component({
    template: `
    <h1>Counter Page</h1>
    <h2>CounterComponent page</h2>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increase()">+1</button>
    <button (click)="decrease()">-1</button>
    <button (click)="reset()">Reset</button>
    `
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
