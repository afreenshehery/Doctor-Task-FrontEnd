import { Component, OnInit, Output, Input } from '@angular/core';
import { TreeviewItem, TreeviewConfig, TreeviewModule } from 'ngx-treeview';
import { ServiceService } from 'src/app/service/staff-service/service.service';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css'],
})
export class TreeComponentComponent implements OnInit {
  @Output()
  TreeItems!: TreeviewItem[];
  values!: number[];
  @Input() items: any;
  data: any;
  course: any;
  action: any;
  save: any = true;
  edit: any;
  getData: any[] = [];
  some: 'data';
  constructor(private ServiceService: ServiceService) {}
  ngOnInit(): void {
    this.getFields();
  }

  getFields() {
    let dat = 'ghjdgjh';
    this.items = [
      new TreeviewItem({
        text: dat,
        value: 91,
        children: [
          {
            text: 'FRONTED',
            value: 0,
            checked: false,
          },
          {
            text: 'BACKEND',
            value: 1,
            checked: false,
          },
          {
            text: 'FULLSTACK',
            value: 2,
            checked: false,
          },
        ],
      }),
      new TreeviewItem({
        text: 'networkin',
        value: 100,
        children: [
          {
            text: 'BACKSTAGE',
            value: 4,
            checked: false,
          },
          {
            text: 'MARKETING',
            value: 5,
            checked: false,
          },
          {
            text: 'SALE',
            value: 6,
            checked: false,
          },
        ],
      }),
    ];
  }

  onClick(data: any) {
    this.getFields();
    console.log(data);
    // this.items = [];

    let Check: [];
    let TEXt: any = [];

    for (let i = 0; i < data.length; i++) {
      Check = data[i].internalChildren;
      // console.log(Check);
      Check.forEach((element: { text: any; internalChecked: boolean }) => {
        if (element.internalChecked === true) {
          TEXt.push(element.text);
        }
      });
    }
    console.log(TEXt);
    let allData = {
      course: TEXt,
    };

    this.ServiceService.treeViewPost(allData).subscribe((response) => {
      // console.log(response.data);
      this.getData.push(response.data);
    });
  }

  onEdit() {
    // this.TreeItems = [];
    console.log(this.items);

    this.edit = true;
    this.save = false;
    // console.log(items);
    console.log(this.getData);

    this.ServiceService.getTree().subscribe((response) => {
      localStorage.setItem('treeId', response.id);
      const arr = response.data.split(',');
      let Check: [];
      let TEXt: any = [];
      let TRUEFAles: any = [];
      for (let i = 0; this.items.length; ) {
        Check = this.items[i].internalChildren;

        Check.forEach((el: { text: any; internalChecked: boolean }) => {
          TEXt = el.text;
          console.log(TEXt);

          if (arr.includes(el.text)) {
            TRUEFAles = el.internalChecked = true;
            console.log(TRUEFAles);
          }
        });
        i++;
      }

      // console.log(response.data);
    });
  }
  onUpdate(items: any) {
    this.getFields();
    console.log(items);
    let element: any;
    let check: any = [];
    for (let index = 0; index < items.length; index++) {
      element = items[index].internalChildren;
      element.forEach((el: { text: any; internalChecked: boolean }) => {
        if (el.internalChecked === true) {
          check.push(el.text);
        }
      });
    }
    let object = {
      course: check,
      id: localStorage.getItem('treeId'),
    };
    console.log(object);
    let idStore = localStorage.getItem('treeId');
    console.log(idStore);

    this.ServiceService.updateTree(object).subscribe((response) => {
      console.log(response);
    });
  }
}
