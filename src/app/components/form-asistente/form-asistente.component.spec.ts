import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAsistenteComponent } from './form-asistente.component';

describe('FormAsistenteComponent', () => {
  let component: FormAsistenteComponent;
  let fixture: ComponentFixture<FormAsistenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAsistenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
