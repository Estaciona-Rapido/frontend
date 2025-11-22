import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessHourItemComponent } from './business-hour-item.component';

describe('BusinessHourItemComponent', () => {
  let component: BusinessHourItemComponent;
  let fixture: ComponentFixture<BusinessHourItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessHourItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessHourItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
