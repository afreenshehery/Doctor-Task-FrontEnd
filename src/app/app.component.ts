import { Component, Input } from '@angular/core';
import { nestedData } from '../assets/scema';
import { TreeviewItem, TreeviewConfig, TreeviewModule } from 'ngx-treeview';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'doctorapp';
  scema: any = nestedData['schema'];
  // items: any;
  // @Input() public items: any;

  // constructor() {}
  // handleImage(items: any) {
  //   this.items = items;
  // }
}
