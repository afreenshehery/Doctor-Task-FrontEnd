import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/staff-service/service.service';
import { SocketServiceService } from '../service/socket-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message: string | undefined;
  messages: string[] = [];
  constructor(
    public ServiceService: ServiceService,
    public SocketServiceService: SocketServiceService,
    private router: Router
  ) {}

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  selected = '';

  onSignup(form: NgForm): void {
    let formData = {
      AdminEmail: form.value.AdminEmail,
      AdminType: (form.value.AdminType = this.selected),
      AdminPassword: form.value.AdminPassword,
    };

    this.ServiceService.login(formData).subscribe(
      (response: any) => {
        const token = response.token;

        const hospital = response.hopitalId;
        const AdminType = response.AdminType;

        if (AdminType == 'mainDoctor') {
          this.router.navigate(['/menu']);
        } else if (AdminType == 'assistantDoctor') {
          this.router.navigate(['/menu1']);
        }

        alert(' succesfully login');
        this.saveAuthData(token, hospital, AdminType);
      },
      (error) => {
        console.log(error);
        alert(' invalid user');
      }
    );
  }

  private saveAuthData(token: string, hospitalid: any, adminType: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('hospitalid', hospitalid);
    localStorage.setItem('adminType', adminType);
  }

  sendMessage() {
    this.SocketServiceService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit(): void {
    // this.SocketServiceService.sendid();
    this.SocketServiceService.getMessages().subscribe((message: any) => {
      this.messages.push(message);
      console.log(this.messages);
    });
  }
}
// }
