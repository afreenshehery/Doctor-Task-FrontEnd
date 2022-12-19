import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/service/staff-service/service.service';
import { Post } from 'src/app/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-staff',
  templateUrl: './post-staff.component.html',
  styleUrls: ['./post-staff.component.css'],
})
export class PostStaffComponent implements OnInit {
  images: any;
  constructor(
    private service: ServiceService,
    public route: ActivatedRoute,
    private router: Router
  ) {}
  post: Post | undefined;
  staffData: any;
  activeAddStaff: any;
  activeEditStaff: any;
  private mode = 'postStaff';
  private postId: any;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'editee';
        this.activeEditStaff = 'editee';
        this.postId = paramMap.get('postId');

        this.service.getStaffPostForEdit(this.postId).subscribe((response) => {
          console.log(response.staffData);
          const staffData1 = response.staffData;

          this.staffData = {
            id: staffData1.id,
            staffName: staffData1.staffName,
            staffLastname: staffData1.staffLastname,
            staffMobileNumber: staffData1.staffMobileNumber,
            staffAddress: staffData1.staffAddress,
            staffBloodgroup: staffData1.staffBloodgroup,
            staffAge: staffData1.staffAge,
            gender: staffData1.gender,
            staffPost: staffData1.staffPost,
            staffJoiningDate: staffData1.staffJoiningDate,
            salary: staffData1.salary,
            patientTreatmentdate: staffData1.patientTreatmentdate,
            staffprofilepic: staffData1.staffprofilepic,
          };
          console.log(this.staffData);
        });
      } else {
        this.mode = 'postStaff';
        this.activeAddStaff = 'postStaff';
        this.postId = null;
      }
    });
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.images = file;
    }
  }
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const formDataImage = new FormData();
    formDataImage.append('staffprofilepic', this.images);

    let StaffData = {
      staffName: form.value.staffName,
      staffLastname: form.value.staffLastname,
      staffMobileNumber: form.value.staffMobileNumber,
      staffAddress: form.value.staffAddress,
      staffBloodgroup: form.value.staffBloodgroup,
      staffAge: form.value.staffAge,
      gender: form.value.gender,
      staffPost: form.value.staffPost,
      staffJoiningDate: form.value.staffJoiningDate,
      salary: form.value.salary,
      patientTreatmentdate: form.value.patientTreatmentdate,
      staffprofilepic: form.value.formDataImage,
    };
    // console.log(form.value.formDataImage);
    console.log(StaffData);
    formDataImage.append('body', JSON.stringify(StaffData));

    if (this.mode == 'postStaff') {
      this.service.createStaff(formDataImage).subscribe(
        (responseData) => {
          console.log(responseData);
          this.router.navigate(['/stafflist']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.service
        .updatePostStaff(this.postId, StaffData)
        .subscribe((response) => {
          this.router.navigate(['/stafflist']);
        });
    }

    form.resetForm();
  }
}
