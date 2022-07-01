import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysubscriberlistComponent } from './mysubscriberlist.component';

describe('MysubscriberlistComponent', () => {
  let component: MysubscriberlistComponent;
  let fixture: ComponentFixture<MysubscriberlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysubscriberlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysubscriberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
