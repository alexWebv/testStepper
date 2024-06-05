import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testStepper';

  public steps = [{label: 'Role'}, {label: 'Email'}, {label: 'Settings'}]
}