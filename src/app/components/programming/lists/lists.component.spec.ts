import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsComponent } from './lists.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ListsComponent', () => {
  let component: ListsComponent;
  let fixture: ComponentFixture<ListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsComponent, TranslateModule.forRoot()],
      providers: [TranslateService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
