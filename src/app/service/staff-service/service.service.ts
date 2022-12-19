import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public post: any = [];
  isAdminType: any;
  public patietPost: any = [];
  private token: string = '';
  private hospitalId: string = '';
  private isAuthenticated = false;
  private postsUpdated = new Subject<any[]>();
  private authStatusListener = new Subject<boolean>();

  url = environment.url;

  constructor(private http: HttpClient, private router: Router) {}

  getHeader(): HttpHeaders {
    let headers = new HttpHeaders({
      token: localStorage.getItem('token') || '',
    });
    return headers;
  }

  getToken() {
    return this.token;
  }

  gethospitalid() {
    return this.hospitalId;
  }
  getIsAuth() {
    return (this.isAuthenticated = false);
  }

  getAdminType() {
    return this.isAdminType;
  }

  registerAdmin(formData: any) {
    const authData = formData;
    console.log(formData);
    return this.http.post<{
      token: string;
      AdminType: any;
      AdminDetails: any;
      hopitalId: any;
    }>(`${this.url}/register1`, authData);
  }
  // ....................................login......................................
  login(formData: any) {
    const authData = formData;

    return this.http.post<{ token: any; AdminType: string; hopitalId: any }>(
      `${this.url}/login`,
      authData,
      {
        headers: this.getHeader(),
      }
    );
  }

  getDoctor() {
    return this.http.get<{ getDoctor: any }>(`${this.url}/get_admin`, {
      headers: this.getHeader(),
    });
  }

  getDoctorbyId(id: string) {
    return this.http.get<{ DoctorInfo: any }>(
      `${this.url}/register_info/` + id,
      {
        headers: this.getHeader(),
      }
    );
  }

  UpdateDoctor(id: any, formData: any) {
    const post: any = formData;
    return this.http.put(`${this.url}/edit_admin/` + id, post, {
      headers: this.getHeader(),
    });
  }

  // ........................Stafffffffffffffffff...................................
  createStaff(formDataImage: any) {
    const authData = formDataImage;

    return this.http.post(`${this.url}/add_staff`, authData, {
      headers: this.getHeader(),
    });
  }

  getStaff() {
    return this.http.get<{ staffs: any }>(`${this.url}/get_staff_data`, {
      headers: this.getHeader(),
    });
  }

  getStaffPostForEdit(id: string) {
    return this.http.get<{
      staffData: any;
    }>(`${this.url}/get_staff_update/` + id, {
      headers: this.getHeader(),
    });
  }

  updatePostStaff(id: any, StaffData: any) {
    const post: any = StaffData;
    return this.http.put(`${this.url}/edit_staff/` + id, post, {
      headers: this.getHeader(),
    });
  }
  deleteStaffPost(id: any) {
    return this.http.delete(`${this.url}/destroy_staff/` + id, {
      headers: this.getHeader(),
    });
  }
  // ........................Stafffffffffffffffff...................................

  createpatient(formDataImage: any) {
    return this.http.post(`${this.url}/add_petient`, formDataImage, {
      headers: this.getHeader(),
    });
  }

  getpatientDetails() {
    return this.http.get<{ patients: any }>(`${this.url}/get_patient_data`, {
      headers: this.getHeader(),
    });
  }

  getPosPatientForEdit(id: any) {
    return this.http.get<{
      PatientData: any;
    }>(`${this.url}/get_Patient_update/` + id, {
      headers: this.getHeader(),
    });
  }

  updatePostPatient(id: any, formDataImage: any) {
    return this.http.put(`${this.url}/edit_patient/` + id, formDataImage, {
      headers: this.getHeader(),
    });
  }

  deletePatientPost(id: any) {
    console.log(id);

    return this.http.delete(`${this.url}/destroy_patient/` + id, {
      headers: this.getHeader(),
    });
  }
  treeViewPost(allData: any) {
    // const authData = TEXt;
    return this.http.post<{ data: any }>(`${this.url}/treeView`, allData);
  }

  getTree() {
    return this.http.get<{ data: any; id: any }>(`${this.url}/getTree`);
  }

  updateTree(object: any) {
    let id = localStorage.getItem('treeId');
    return this.http.put(`${this.url}/updateTree/` + id, object);
  }
  sendRecursive(recursiveData: any) {
    return this.http.post(`${this.url}/sendRecursive`, recursiveData);
  }
  getRecursive() {
    return this.http.get<{ data: any }>(`${this.url}/getRecursive`);
  }
}

//   email() {
//     // console.log(id);

//     return this.http.delete(`${this.url}/destroy_patient/` + id, {
//       headers: this.getHeader(),
//     });
//   }
// }
