import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsComponent } from './operators.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('OperatorsComponent', () => {
  let component: OperatorsComponent;
  let fixture: ComponentFixture<OperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorsComponent, TranslateModule.forRoot()],
      providers: [TranslateService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
