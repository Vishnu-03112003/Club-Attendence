import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './attendance.html',
  styleUrls: ['./attendance.css']
})
export class AttendanceComponent implements OnInit {
  clubName = '';
  eventName = '';
  presenter = '';
  date = new Date().toDateString();

  students = [
    { name: 'Student A', year: 2, isOB: true, present: false },
    { name: 'Student B', year: 3, isOB: false, present: false },
    { name: 'Student C', year: 4, isOB: false, present: false }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.clubName = this.route.snapshot.paramMap.get('clubName') || 'Club';
  }

  submit() {
    alert(`Attendance for ${this.clubName} submitted!`);
  }
}
