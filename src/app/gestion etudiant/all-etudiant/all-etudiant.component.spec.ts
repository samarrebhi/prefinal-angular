import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEtudiantComponent } from './all-etudiant.component';

describe('AllEtudiantComponent', () => {
  let component: AllEtudiantComponent;
  let fixture: ComponentFixture<AllEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
