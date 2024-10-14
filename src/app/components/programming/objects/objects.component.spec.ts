import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsComponent } from './objects.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ObjectsComponent', () => {
  let component: ObjectsComponent;
  let fixture: ComponentFixture<ObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectsComponent, TranslateModule.forRoot()],
      providers: [TranslateService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
