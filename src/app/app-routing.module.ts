import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { Menu1Component } from './menu1/menu1.component';
import { PatientComponent } from './patient/patient-list/patient.component';
import { PostStaffComponent } from './staff/post-Stafff/post-staff.component';
import { RegisterComponent } from './register/register.component';
import { StaffComponent } from './staff/staff-list/staff.component';
import { PatientPostComponent } from './patient/patient-post/patient-post.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AuthGuardAdminType } from './auth.guard.adminType';
import { TreeComponentComponent } from './treeView/tree-component/tree-component.component';

import { AuthGuardasasisType } from './auth.gruard.assisType';
import { MapComponent } from './map/map.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'req', component: RegisterComponent },
  {
    path: 'reqEdit/:postId',
    component: RegisterComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  // ............................................................
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard, AuthGuardAdminType],
  },
  {
    path: 'menu1',
    component: Menu1Component,
    canActivate: [AuthGuard, AuthGuardasasisType],
  },
  // ............................................................

  {
    path: 'patientList',
    component: PatientComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'patient',
    component: PatientPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:postId',
    component: PatientPostComponent,
    canActivate: [AuthGuard],
  },

  // ............................................................
  {
    path: 'stafflist',
    component: StaffComponent,
    canActivate: [AuthGuard, AuthGuardAdminType],
  },
  {
    path: 'postStaff',
    component: PostStaffComponent,
    canActivate: [AuthGuard, AuthGuardAdminType],
  },
  {
    path: 'editee/:postId',
    component: PostStaffComponent,
    canActivate: [AuthGuard, AuthGuardAdminType],
  },
  // ............................................................
  {
    path: 'editeDoctorProfile',
    component: DoctorDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'map', component: MapComponent },
  { path: 'recorsiv', component: RecursiveComponent },
  { path: 'treeView', component: TreeComponentComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
