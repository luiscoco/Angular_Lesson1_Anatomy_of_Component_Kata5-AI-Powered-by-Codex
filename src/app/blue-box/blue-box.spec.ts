import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBox } from './blue-box';

describe('BlueBox', () => {
  let component: BlueBox;
  let fixture: ComponentFixture<BlueBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
