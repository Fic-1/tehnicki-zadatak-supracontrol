import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisniciFormComponent } from './korisnici-form.component';

describe('KorisniciFormComponent', () => {
  let component: KorisniciFormComponent;
  let fixture: ComponentFixture<KorisniciFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KorisniciFormComponent]
    });
    fixture = TestBed.createComponent(KorisniciFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
