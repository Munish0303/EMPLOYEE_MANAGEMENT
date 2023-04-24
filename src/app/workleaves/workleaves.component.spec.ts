import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkleavesComponent } from './workleaves.component';

describe('WorkleavesComponent', () => {
  let component: WorkleavesComponent;
  let fixture: ComponentFixture<WorkleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
