import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../service/staff-service/service.service';
// import { Router } from '@angular/router';

import { TreeComponentComponent } from '../treeView/tree-component/tree-component.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  items: any = TreeComponentComponent['items'];
  constructor(
    public ServiceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  selected = '';
  token: any;
  isAdminType: any;

  // onSignup(form: NgForm) {
  //   this.ServiceService.createUser(
  //     form.value.AdminName,
  //     form.value.AdminEmail,
  //     form.value.AdminMobile,
  //     (form.value.AdminType = this.selected),
  //     form.value.AdminAddress,
  //     form.value.AdminPassword
  //   );
  // }

  post: any | undefined;
  doctorInfo: any;
  activeSignUp: any;
  activeEdit: any;
  private mode = 'req';
  private postId: any;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'reqEdit';
        this.activeEdit = 'reqEdit';

        this.postId = paramMap.get('postId');

        this.ServiceService.getDoctorbyId(this.postId).subscribe((response) => {
          console.log(response.DoctorInfo);
          const StoredoctorInfo = response.DoctorInfo;
          console.log(StoredoctorInfo);

          this.doctorInfo = {
            id: StoredoctorInfo.id,
            AdminName: StoredoctorInfo.adminName,
            AdminEmail: StoredoctorInfo.adminEmail,
            AdminMobile: StoredoctorInfo.adminMobile,
            AdminType: StoredoctorInfo.adminType,
            AdminAddress: StoredoctorInfo.adminAddress,
            AdminPassword: StoredoctorInfo.adminPassword,
          };
          console.log(this.doctorInfo);
        });
      } else {
        this.mode = 'req';
        this.activeSignUp = 'req';
        this.postId = null;
      }
    });
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let formData: any = {
      AdminName: form.value.AdminName,
      AdminEmail: form.value.AdminEmail,
      AdminMobile: form.value.AdminMobile,
      AdminType: (form.value.AdminType = this.selected),
      AdminAddress: form.value.AdminAddress,
      AdminPassword: form.value.AdminPassword,
    };

    if (this.mode === 'req') {
      this.ServiceService.registerAdmin(formData).subscribe(
        (responseData: any) => {
          console.log(responseData.token);
          const token: any = responseData.token;
          this.token = token;
          const AdminType = responseData.AdminType;
          this.isAdminType = AdminType;

          const hospitalId = responseData.hopitalId;
          this.saveAuthData(token, hospitalId, AdminType);

          if (AdminType == 'mainDoctor') {
            this.router.navigate(['/menu']);
          }
          if (AdminType == 'assistantDoctor') {
            this.router.navigate(['/menu1']);
          }
          alert(' succesfully login');
        },
        (error) => {
          alert(' invalid user');
        }
      );
    } else {
      this.ServiceService.UpdateDoctor(this.postId, formData).subscribe(
        (response) => {
          console.log(formData);

          this.router.navigate(['/editeDoctorProfile']);
        }
      );
    }

    form.resetForm();
  }

  private saveAuthData(token: string, hospitalid: any, adminType: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('hospitalid', hospitalid);
    localStorage.setItem('adminType', adminType);
  }
}
