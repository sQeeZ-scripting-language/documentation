import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonErrorMessagesComponent } from './common-error-messages.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('CommonErrorMessagesComponent', () => {
  let component: CommonErrorMessagesComponent;
  let fixture: ComponentFixture<CommonErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonErrorMessagesComponent, TranslateModule.forRoot()],
      providers: [TranslateService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
