import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivefavlistComponent } from './archivefavlist.component';

describe('ArchivefavlistComponent', () => {
  let component: ArchivefavlistComponent;
  let fixture: ComponentFixture<ArchivefavlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivefavlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivefavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
