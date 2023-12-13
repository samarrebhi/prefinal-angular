import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerDeleteComponent } from './foyer-delete.component';

describe('FoyerDeleteComponent', () => {
  let component: FoyerDeleteComponent;
  let fixture: ComponentFixture<FoyerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
