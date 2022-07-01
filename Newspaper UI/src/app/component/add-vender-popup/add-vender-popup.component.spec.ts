import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVenderPopupComponent } from './add-vender-popup.component';

describe('AddVenderPopupComponent', () => {
  let component: AddVenderPopupComponent;
  let fixture: ComponentFixture<AddVenderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVenderPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVenderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
