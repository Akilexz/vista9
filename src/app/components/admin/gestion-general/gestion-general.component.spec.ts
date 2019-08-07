import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGeneralComponent } from './gestion-general.component';

describe('GestionGeneralComponent', () => {
  let component: GestionGeneralComponent;
  let fixture: ComponentFixture<GestionGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
