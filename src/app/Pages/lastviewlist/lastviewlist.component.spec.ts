import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastviewlistComponent } from './lastviewlist.component';

describe('LastviewlistComponent', () => {
  let component: LastviewlistComponent;
  let fixture: ComponentFixture<LastviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastviewlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
