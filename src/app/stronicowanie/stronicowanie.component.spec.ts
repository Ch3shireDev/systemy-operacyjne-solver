import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronicowanieComponent } from './stronicowanie.component';

describe('StronicowanieComponent', () => {
  let component: StronicowanieComponent;
  let fixture: ComponentFixture<StronicowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StronicowanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StronicowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
