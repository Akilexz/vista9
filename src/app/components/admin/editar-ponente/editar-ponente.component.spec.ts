import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPonenteComponent } from './editar-ponente.component';

describe('EditarPonenteComponent', () => {
  let component: EditarPonenteComponent;
  let fixture: ComponentFixture<EditarPonenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPonenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPonenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
