import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationComponent } from './installation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('InstallationComponent', () => {
  let component: InstallationComponent;
  let fixture: ComponentFixture<InstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationComponent, TranslateModule.forRoot()],
      providers: [TranslateService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
