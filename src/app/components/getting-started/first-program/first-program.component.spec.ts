import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProgramComponent } from './first-program.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('FirstProgramComponent', () => {
  let component: FirstProgramComponent;
  let fixture: ComponentFixture<FirstProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstProgramComponent, TranslateModule.forRoot()],
      providers: [TranslateService]
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
