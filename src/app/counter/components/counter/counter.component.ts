import { Component } from "@angular/core";

@Component ({
    selector: 'app-counter',
    template:`<h1> Contador: {{counter}}</h1>
    <button (click)="incrementar(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementar(-1)">-1</button>`

})
export class CounterComponent{
    counter: number = 10;
    incrementar(value:number):void{
        this.counter += value;
      }
      reset():void {
        this.counter = 0;
      }

}