import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewspaperpopupComponent } from './update-newspaperpopup.component';

describe('UpdateNewspaperpopupComponent', () => {
  let component: UpdateNewspaperpopupComponent;
  let fixture: ComponentFixture<UpdateNewspaperpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNewspaperpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewspaperpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
