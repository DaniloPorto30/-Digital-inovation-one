import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeustepperComponent } from './meustepper.component';

describe('MeustepperComponent', () => {
  let component: MeustepperComponent;
  let fixture: ComponentFixture<MeustepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeustepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeustepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
