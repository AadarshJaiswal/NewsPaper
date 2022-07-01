import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperlistComponent } from './newspaperlist.component';

describe('NewspaperlistComponent', () => {
  let component: NewspaperlistComponent;
  let fixture: ComponentFixture<NewspaperlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
