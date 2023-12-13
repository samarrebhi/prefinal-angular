import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChambreComponent } from './delete-chambre.component';

describe('DeleteChambreComponent', () => {
  let component: DeleteChambreComponent;
  let fixture: ComponentFixture<DeleteChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteChambreComponent]
    });
    fixture = TestBed.createComponent(DeleteChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
