import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribepopupComponent } from './subscribepopup.component';

describe('SubscribepopupComponent', () => {
  let component: SubscribepopupComponent;
  let fixture: ComponentFixture<SubscribepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribepopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
