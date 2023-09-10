import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() userInput?: string = "shiyam";

  constructor() {
    console.log("Constructed called");
    console.log(" User Value", this.userInput)
  }

  ngOnInit(): void {
    console.log("NgOnInit in executed")
    console.log(" User Value", this.userInput)
  }

}
