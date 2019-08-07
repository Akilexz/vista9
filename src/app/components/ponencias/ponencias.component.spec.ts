import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonenciasComponent } from './ponencias.component';

describe('PonenciasComponent', () => {
  let component: PonenciasComponent;
  let fixture: ComponentFixture<PonenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
