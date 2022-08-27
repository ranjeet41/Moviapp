import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingMoviComponent } from './upcomming-movi.component';

describe('UpcommingMoviComponent', () => {
  let component: UpcommingMoviComponent;
  let fixture: ComponentFixture<UpcommingMoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingMoviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcommingMoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
