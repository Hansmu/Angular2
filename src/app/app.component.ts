import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root', //Reference used to call the component in HTML.
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'This app works!';
}
