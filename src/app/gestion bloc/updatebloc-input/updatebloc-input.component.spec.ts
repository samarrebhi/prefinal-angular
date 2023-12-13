import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateblocInputComponent } from './updatebloc-input.component';

describe('UpdateblocInputComponent', () => {
  let component: UpdateblocInputComponent;
  let fixture: ComponentFixture<UpdateblocInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateblocInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateblocInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
