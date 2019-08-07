import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPonenteComponent } from './form-ponente.component';

describe('FormPonenteComponent', () => {
  let component: FormPonenteComponent;
  let fixture: ComponentFixture<FormPonenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPonenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPonenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
