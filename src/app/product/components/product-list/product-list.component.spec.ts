import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListComponent} from './product-list.component';

describe('ProductListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelListComponent]
    });
    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
