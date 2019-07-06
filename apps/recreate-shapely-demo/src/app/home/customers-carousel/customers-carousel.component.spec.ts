import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCarouselComponent } from './customers-carousel.component';

describe('CustomersCarouselComponent', () => {
  let component: CustomersCarouselComponent;
  let fixture: ComponentFixture<CustomersCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
