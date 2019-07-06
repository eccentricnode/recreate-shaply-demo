import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdShowcaseComponent } from './third-showcase.component';

describe('ThirdShowcaseComponent', () => {
  let component: ThirdShowcaseComponent;
  let fixture: ComponentFixture<ThirdShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
