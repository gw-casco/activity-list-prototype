import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcitivityListComponent } from './acitivity-list.component';

describe('AcitivityListComponent', () => {
  let component: AcitivityListComponent;
  let fixture: ComponentFixture<AcitivityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcitivityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcitivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
