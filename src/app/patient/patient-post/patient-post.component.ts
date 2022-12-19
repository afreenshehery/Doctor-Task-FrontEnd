import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/staff-service/service.service';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-patient-post',
  templateUrl: './patient-post.component.html',
  styleUrls: ['./patient-post.component.css'],
})
export class PatientPostComponent implements OnInit {
  images: any;
  constructor(
    private service: ServiceService,

    public route: ActivatedRoute,
    public router: Router
  ) {}
  post: Post | undefined;
  patientData: any;
  adminType: any;
  activeAddPatient: any;
  activeEditPatient: any;
  private mode = 'patient';
  private postId: any;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.activeEditPatient = 'edit';

        this.postId = paramMap.get('postId');

        this.service.getPosPatientForEdit(this.postId).subscribe((response) => {
          console.log(response.PatientData);
          let patientData1 = response.PatientData;
          this.patientData = {
            id: patientData1.id,
            patientName: patientData1.patientName,
            patientLastname: patientData1.patientLastname,
            patientAge: patientData1.patientAge,
            patientMobile: patientData1.patientMobile,
            Gender: patientData1.Gender,
            disease: patientData1.disease,
            treatment: patientData1.treatment,
            patientType: patientData1.patientType,
            paidPayment: patientData1.paidPayment,
            duePayment: patientData1.duePayment,
            patientTreatmentDate: patientData1.patientTreatmentDate,
            patientPhoto: patientData1.patientPhoto,
          };

          console.log(this.patientData);
        });
      } else {
        this.mode = 'patient';
        this.activeAddPatient = 'patient';
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
    formDataImage.append('patientPhoto', this.images);

    let formData = {
      patientName: form.value.patientName,
      patientLastname: form.value.patientLastname,
      patientAge: form.value.patientAge,
      patientMobile: form.value.patientMobile,
      Gender: form.value.Gender,
      disease: form.value.disease,
      treatment: form.value.treatment,
      patientType: form.value.patientType,
      paidPayment: form.value.paidPayment,
      duePayment: form.value.duePayment,
      patientTreatmentDate: form.value.patientTreatmentDate,
      patientPhoto: form.value.formDataImage,
    };

    formDataImage.append('body', JSON.stringify(formData));

    console.log(formDataImage);
    if (this.mode == 'patient') {
      this.service.createpatient(formDataImage).subscribe(
        (responseData) => {
          this.router.navigate(['/patientList']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log(formDataImage);
      this.service
        .updatePostPatient(this.postId, formDataImage)

        .subscribe((response) => {
          this.router.navigate(['/patientList']);
        });
    }
    form.resetForm();
  }
}

// const data = new FormData();
// data.append('image', this.product.productImageFile);

// let params = {
//       _id: this.product._id,
//       categoryid: this.product.categoryid,
//       name: this.product.name,
// }

// data.append("body", JSON.stringify(params));

//  this.commonService.addProject(data).subscribe((res: any) => {

// }

//   addProject(data) {
//     return this.http.post(this.addProjectUrl, data, { 'headers': this.getHeader() });
//   }
