import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hola Mundo';
  counter:number =10;

  incrementar(value:number):void{
    this.counter += value;
  }
  reset():void {
    this.counter = 0;
  }
}
