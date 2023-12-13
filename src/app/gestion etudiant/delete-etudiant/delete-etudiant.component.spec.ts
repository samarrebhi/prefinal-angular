import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEtudiantComponent } from './delete-etudiant.component';

describe('DeleteEtudiantComponent', () => {
  let component: DeleteEtudiantComponent;
  let fixture: ComponentFixture<DeleteEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
