import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  @Input() userInput?: string = "shiyam";

  constructor() {
    console.log("Constructed called");
    console.log(this.userInput);
  }

}
