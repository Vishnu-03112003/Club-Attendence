import { Routes } from '@angular/router';
import { HomeComponent } from './home/home'; // Removed '.component'
import { AttendanceComponent } from './attendance/attendance'; // Removed '.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attendance/:clubName', component: AttendanceComponent }
];
