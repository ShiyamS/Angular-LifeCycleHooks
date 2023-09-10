import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck {

  @Input() userInput?: string = "shiyam";

  constructor() {
    // Its executed on once , when the Angular app loads
    console.log("Constructed called");
    // console.log(" User Value", this.userInput)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Its executed initially and well as on and Inputboudn property chnages
    //Its the only lifecycle that accepts Argument
    console.log("ngOnChanges is called")
    console.log(changes)
  }

  ngOnInit(): void {
    // Its executed only once, its the best place to initilized the values
    console.log("NgOnInit in executed")
    // console.log(" User Value", this.userInput)
  }

  ngDoCheck(): void {
    console.log("NgDoCheck is called")
  }

}
