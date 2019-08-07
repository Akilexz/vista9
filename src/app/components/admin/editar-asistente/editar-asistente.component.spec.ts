import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAsistenteComponent } from './editar-asistente.component';

describe('EditarAsistenteComponent', () => {
  let component: EditarAsistenteComponent;
  let fixture: ComponentFixture<EditarAsistenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAsistenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
