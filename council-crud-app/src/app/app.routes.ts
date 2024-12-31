import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CouncilManagementComponent } from './council-management/council-management.component';
import { RegulationManagementComponent } from './regulation-management/regulation-management.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent }, //Default route
  { path: 'council-management', component: CouncilManagementComponent },
  { path: 'regulation-management/:councilId', component: RegulationManagementComponent },
];
