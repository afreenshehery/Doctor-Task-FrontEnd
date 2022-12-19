import { Component, OnInit } from '@angular/core';
import { TreeComponentComponent } from '../treeView/tree-component/tree-component.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items.push(TreeComponentComponent['items']);
  }
}
