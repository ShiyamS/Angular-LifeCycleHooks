import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleHooks';

  userEnteredValue: string = ''

  submitName(inputValue: HTMLInputElement) {
    this.userEnteredValue = inputValue.value;
  }
}
