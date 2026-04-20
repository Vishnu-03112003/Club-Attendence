import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  coCurricular = [
    'Institution of Engineers', 'IEEE Students Chapter', 'IETE Students Forum', 
    'EDC', 'IIPC', 'IACES', 'ISTE Student Chapter', 'CSI Students Chapter', 
    'Microsoft Campus Club', 'Google Students Club', 'MBA Association', 
    'MCA Association', 'Maths Club', 'Science Forum', 'Apti-Riders Forum', 
    'SAE India', 'Renewable Energy Club', 'Robotics Club', 'ASME Club', 
    'Biomedical Engineering Society of India', 'AMIEE Club'
  ];

  extraCurricular = [
    'Fine Arts', 'Rifle Club', 'Literary Association', 'Consumer Club', 
    'Photography Club', 'Readers Club', 'Blue Sky Forum', 'NSS', 'NCC', 
    'Health Club', 'Nature Forum'
  ];
}

