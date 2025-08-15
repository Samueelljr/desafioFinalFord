import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionCarsComponent } from './exhibition-cars.component';

describe('ExhibitionCarsComponent', () => {
  let component: ExhibitionCarsComponent;
  let fixture: ComponentFixture<ExhibitionCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
