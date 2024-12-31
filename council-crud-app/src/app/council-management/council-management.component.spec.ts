import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilManagementComponent } from './council-management.component';

describe('CouncilManagementComponent', () => {
  let component: CouncilManagementComponent;
  let fixture: ComponentFixture<CouncilManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouncilManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouncilManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
