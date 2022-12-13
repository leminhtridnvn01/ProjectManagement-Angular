import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  // private _stages: any;
  // get stages() {
  //   return this._stages;
  // }
  // @Input()
  // set stages(value: any) {
  //   this.stages = value;
  // }
  @Input()
  stages: any[] = [];

  
}
