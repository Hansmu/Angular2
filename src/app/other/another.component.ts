import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-another',
  template: `
    <article>
      <p>Hello content, my old friend. I've come to render you again.</p>
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
    article {
      border: 1px solid black;
    }
  `]
})
export class AnotherComponent {

}
