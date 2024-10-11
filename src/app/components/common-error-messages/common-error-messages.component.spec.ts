import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonErrorMessagesComponent } from './common-error-messages.component';

describe('CommonErrorMessagesComponent', () => {
  let component: CommonErrorMessagesComponent;
  let fixture: ComponentFixture<CommonErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonErrorMessagesComponent]
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
