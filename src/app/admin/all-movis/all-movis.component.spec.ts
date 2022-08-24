import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMovisComponent } from './all-movis.component';

describe('AllMovisComponent', () => {
  let component: AllMovisComponent;
  let fixture: ComponentFixture<AllMovisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMovisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMovisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
