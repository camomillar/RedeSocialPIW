import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaDoTempoComponent } from './linha-do-tempo.component';

describe('LinhaDoTempoComponent', () => {
  let component: LinhaDoTempoComponent;
  let fixture: ComponentFixture<LinhaDoTempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhaDoTempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhaDoTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
