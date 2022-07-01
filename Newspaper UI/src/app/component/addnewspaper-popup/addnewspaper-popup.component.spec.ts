import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewspaperPopupComponent } from './addnewspaper-popup.component';

describe('AddnewspaperPopupComponent', () => {
  let component: AddnewspaperPopupComponent;
  let fixture: ComponentFixture<AddnewspaperPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewspaperPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewspaperPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
