import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service/staff-service/service.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  p: any = 1;
  staffs: any = [];
  totalPosts = 10;
  postsPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];
  postsSub!: Subscription;
  // public page = 1;

  constructor(public service: ServiceService) {}

  getStaffList() {
    this.service.getStaff().subscribe((transformedPosts) => {
      console.log(transformedPosts.staffs);
      this.staffs = transformedPosts.staffs;
    });
  }

  ngOnInit(): void {
    this.getStaffList();
  }

  onChangedpage(pageData: PageEvent) {
    // showPageIndex(pageIndex){
  }

  onDelete(id: any) {
    console.log('clicked');
    this.service.deleteStaffPost(id).subscribe(() => {
      alert('deleted');
      this.getStaffList();
    });
  }
  // ngOnDestroy() {
  //   // this.postsSub.unsubscribe();
  // }
}
