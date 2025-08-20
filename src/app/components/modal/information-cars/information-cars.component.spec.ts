import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCarsComponent } from './information-cars.component';

describe('InformationCarsComponent', () => {
  let component: InformationCarsComponent;
  let fixture: ComponentFixture<InformationCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
