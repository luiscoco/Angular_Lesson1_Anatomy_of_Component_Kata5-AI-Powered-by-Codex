import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBox } from './red-box';

describe('RedBox', () => {
  let component: RedBox;
  let fixture: ComponentFixture<RedBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
