import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsShowcaseComponent } from './projects-showcase.component';

describe('ProjectsShowcaseComponent', () => {
  let component: ProjectsShowcaseComponent;
  let fixture: ComponentFixture<ProjectsShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
