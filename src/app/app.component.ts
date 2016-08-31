import { Component } from '@angular/core';
//Meta-data is information you'd want to add to a class but not in the body. This is here to tell Angular2 how to transform the class.
//Tells Angular2 that it's not just a random class, but a component. The one below right now are not all of the fields available. THere are more, but we don't need every field there is.
@Component({ //@ sign marks that it's a TypeScript decorator, which lets us to easily add meta-data to a class.
  moduleId: module.id,
  selector: 'app-root', //Reference used to call the component in HTML. When Angular2 finds the selector in code, then it knows to render this component in that place.
  //If you'd change it to [app-root], then it'd search for an HTML element attribute. So instead of <app-root></app-root>, you'd need <div app-root></div>
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'This app works!';
}
