import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componenmets.............
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// materials...........
import {
  MatNativeDateModule,
  MatOptionModule,
  MatOptionSelectionChange,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';

import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { Menu1Component } from './menu1/menu1.component';
import { StaffComponent } from './staff/staff-list/staff.component';
import { PatientComponent } from './patient/patient-list/patient.component';
import { PostStaffComponent } from './staff/post-Stafff/post-staff.component';
import { PatientPostComponent } from './patient/patient-post/patient-post.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { TreeComponentComponent } from './treeView/tree-component/tree-component.component';
import { MapComponent } from './map/map.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { ProfileComponent } from './profile/profile.component';
// import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

// import { AgmCoreModule } from '@agm/core';

// import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { TreeviewModule } from 'ngx-treeview';

// import { TreeViewModule } from '@progress/kendo-angular-treeview';
// import { TreeViewModule } from '@progress/kendo-angular-treeview';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    Menu1Component,
    StaffComponent,
    PatientComponent,
    PostStaffComponent,
    PatientPostComponent,
    DoctorDetailsComponent,
    TreeComponentComponent,
    MapComponent,
    RecursiveComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    MatOptionModule,
    NgxPaginationModule,
    MatTreeModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    TreeviewModule.forRoot(),

    // AgmCoreModule,

    MatSelectModule,

    // TreeViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
