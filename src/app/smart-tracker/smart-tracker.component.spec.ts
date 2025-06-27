import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTrackerComponent } from './smart-tracker.component';

describe('SmartTrackerComponent', () => {
  let component: SmartTrackerComponent;
  let fixture: ComponentFixture<SmartTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
