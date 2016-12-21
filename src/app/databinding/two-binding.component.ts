import {Component} from '@angular/core';

@Component({
  selector: 'fa-two-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
  `
})
export class TwoBindingComponent {

  person = {
    name: 'Max',
    age: 27
  }

}
