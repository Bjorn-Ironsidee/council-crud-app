import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  councils = [
    { id: 1, name: 'Council A' },
    { id: 2, name: 'Council B' },
    { id: 3, name: 'Council C' },
    // Static list of council for now, will be replaced by API call in future
  ]

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Navigate to council management
  goToCouncilManagement(): void {
    this.router.navigate(['/council-management']);
  }

  // Navigate to regulation management for a specific council
  goToRegulationManagement(councilId: number): void {
    this.router.navigate(['regulation-management/${councilId}']);
  }

}
