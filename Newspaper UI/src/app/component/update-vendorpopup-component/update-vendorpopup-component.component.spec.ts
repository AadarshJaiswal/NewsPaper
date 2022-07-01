import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVendorpopupComponentComponent } from './update-vendorpopup-component.component';

describe('UpdateVendorpopupComponentComponent', () => {
  let component: UpdateVendorpopupComponentComponent;
  let fixture: ComponentFixture<UpdateVendorpopupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVendorpopupComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVendorpopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
