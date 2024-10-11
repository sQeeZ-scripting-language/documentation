import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProgramComponent } from './first-program.component';

describe('FirstProgramComponent', () => {
  let component: FirstProgramComponent;
  let fixture: ComponentFixture<FirstProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
