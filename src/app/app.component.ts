import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {

  delete = false;

  test = 'Starting value';

  boundValue = 1000;
}
