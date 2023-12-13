import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtudiantInputComponent } from './update-etudiant-input.component';

describe('UpdateEtudiantInputComponent', () => {
  let component: UpdateEtudiantInputComponent;
  let fixture: ComponentFixture<UpdateEtudiantInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtudiantInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEtudiantInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
