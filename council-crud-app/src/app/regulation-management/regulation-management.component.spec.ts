import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationManagementComponent } from './regulation-management.component';

describe('RegulationManagementComponent', () => {
  let component: RegulationManagementComponent;
  let fixture: ComponentFixture<RegulationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegulationManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
