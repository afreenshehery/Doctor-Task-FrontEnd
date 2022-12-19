import { Component, OnInit, OnDestroy, assertPlatform } from '@angular/core';

// import { PatientService } from 'src/app/service/patient service/patient.service';
import { ServiceService } from 'src/app/service/staff-service/service.service';
import { SocketServiceService } from 'src/app/service/socket-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  patiets: any = [];
  p: number = 1;
  // count: number = 2;
  adminType: any;
  message: string | undefined;
  messages: string[] = [];
  // public postsSub!: Subscription;
  constructor(
    private service: ServiceService,
    public SocketServiceService: SocketServiceService
  ) {}

  fetStaffList() {
    this.adminType = localStorage.getItem('adminType');

    this.service.getpatientDetails().subscribe((patiets) => {
      this.patiets = patiets.patients;
      console.log(patiets.patients);
    });
  }
  // this.service.createpatient(formDataImage).subscribe(
  //   (responseData) => {
  //     this.router.navigate(['/patientList']);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  ngOnInit(): void {
    this.fetStaffList();
    this.SocketServiceService.getMessages().subscribe((message: any) => {
      // let formDataImage = message;

      console.log('milla data');
      this.messages.push(message);
      console.log(this.messages);
      alert(message);
    });
  }
  onDelete(id: string) {
    this.service.deletePatientPost(id).subscribe((response) => {
      alert('delete');
      this.fetStaffList();
    });
  }
  // ngOnDestroy() {
  //   this.postsSub.unsubscribe();
  // }
}
