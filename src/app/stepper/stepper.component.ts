import {Component, Input} from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        transform: 'translateX(10px)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateX(50)'
      })),
      transition('void <=> active', [
        animate('2000ms ease')
      ])
    ])
  ]
})
export class StepperComponent {
  @Input() steps: { label: string }[] = [];
  @Input() currentStep: number = 0;


  changeStep(i: number) {
    this.currentStep = i;
  }
}
