import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsesChartComponent } from './responses-chart';

describe('ResponsesChartComponent', () => {
  let component: ResponsesChartComponent;
  let fixture: ComponentFixture<ResponsesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsesChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsesChartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
