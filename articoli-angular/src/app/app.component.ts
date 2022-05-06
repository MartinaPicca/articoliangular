import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h2{
       padding: 5px;
       background-color: blue;
    }
    `
  ]
})
export class AppComponent {
  title = 'articoli-angular';
}
