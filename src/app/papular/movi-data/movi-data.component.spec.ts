import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviDataComponent } from './movi-data.component';

describe('MoviDataComponent', () => {
  let component: MoviDataComponent;
  let fixture: ComponentFixture<MoviDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
