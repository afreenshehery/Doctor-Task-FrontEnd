import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from '../service/staff-service/service.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent implements OnInit {
  Doctor: any = [];
  adminType: any;
  ishospitalId: any;
  hospitalId = localStorage.getItem('hospitalid') || '';

  public postsSub!: Subscription;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.adminType = localStorage.getItem('adminType');
    this.ishospitalId = this.hospitalId;
    console.log(this.ishospitalId);

    this.service.getDoctor().subscribe((response) => {
      console.log(response.getDoctor);
      this.Doctor = response.getDoctor;
    });
  }
}
