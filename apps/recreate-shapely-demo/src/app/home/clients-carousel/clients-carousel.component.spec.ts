import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCarouselComponent } from './clients-carousel.component';

describe('ClientsCarouselComponent', () => {
  let component: ClientsCarouselComponent;
  let fixture: ComponentFixture<ClientsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
