import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresowanieComponent } from './adresowanie.component';

describe('AdresowanieComponent', () => {
  let component: AdresowanieComponent;
  let fixture: ComponentFixture<AdresowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresowanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
