import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlocfbComponent } from './update-blocfb.component';

describe('UpdateBlocfbComponent', () => {
  let component: UpdateBlocfbComponent;
  let fixture: ComponentFixture<UpdateBlocfbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBlocfbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBlocfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
