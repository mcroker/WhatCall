import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondCompare } from './respond-compare';

describe('RespondCompare', () => {
  let component: RespondCompare;
  let fixture: ComponentFixture<RespondCompare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespondCompare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondCompare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
