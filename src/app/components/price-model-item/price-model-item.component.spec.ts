import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceModelItemComponent } from './price-model-item.component';

describe('PriceModelItemComponent', () => {
  let component: PriceModelItemComponent;
  let fixture: ComponentFixture<PriceModelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceModelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceModelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
