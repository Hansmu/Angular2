import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-other',
  templateUrl: 'other.component.html'
})
export class OtherComponent {
  stringInterpolation = "This is string interpolation.";
  numberInterpolation = 155;
}
