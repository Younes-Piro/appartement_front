import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseItemsComponent } from './house-items.component';

describe('HouseItemsComponent', () => {
  let component: HouseItemsComponent;
  let fixture: ComponentFixture<HouseItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
