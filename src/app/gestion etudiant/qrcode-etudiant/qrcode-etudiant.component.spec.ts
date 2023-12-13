import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRcodeEtudiantComponent } from './qrcode-etudiant.component';

describe('QRcodeEtudiantComponent', () => {
  let component: QRcodeEtudiantComponent;
  let fixture: ComponentFixture<QRcodeEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRcodeEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QRcodeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
