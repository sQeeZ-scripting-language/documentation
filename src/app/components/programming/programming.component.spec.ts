import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingComponent } from './programming.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ProgrammingComponent', () => {
  let component: ProgrammingComponent;
  let fixture: ComponentFixture<ProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingComponent, TranslateModule.forRoot()],
      providers: [TranslateService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
