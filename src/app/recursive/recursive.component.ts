import { Component, OnInit, Input } from '@angular/core';
import { TreeviewItem, TreeviewConfig, TreeviewModule } from 'ngx-treeview';
import { ProfileComponent } from '../profile/profile.component';
import { ServiceService } from '../service/staff-service/service.service';
import { CommentNode } from '../profile/profile.component';
@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.css'],
})
export class RecursiveComponent implements OnInit {
  comments: Array<CommentNode> = [];
  constructor(public service: ServiceService) {
    this.comments = [new CommentNode('First')];
    console.log(this.comments, 'ss');
  }
  ngOnInit() {}
  onSave(value: any) {
    // const data = { famliy: this.data };
    let items = value;
    console.log(items);
    let data = {
      course: items,
    };
    this.service.sendRecursive(data).subscribe((response) => {});
  }
}
