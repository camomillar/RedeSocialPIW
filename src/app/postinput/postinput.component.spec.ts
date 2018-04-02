import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostinputComponent } from './postinput.component';

describe('PostinputComponent', () => {
  let component: PostinputComponent;
  let fixture: ComponentFixture<PostinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
