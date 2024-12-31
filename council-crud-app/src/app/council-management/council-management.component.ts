import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-council-management',
  imports: [CommonModule],
  templateUrl: './council-management.component.html',
  styleUrl: './council-management.component.css'
})
export class CouncilManagementComponent implements OnInit {

  councils = [];
  newCouncilName = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchCouncils();
  }

  // Fetch councils from the backend API
  fetchCouncils(): void {
    this.http.get<any[]>('http://localhost:3000/councils').subscribe(data => { this.councils = data; });
  }
}
