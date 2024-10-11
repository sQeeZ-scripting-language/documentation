import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStructuresComponent } from './control-structures.component';

describe('ControlStructuresComponent', () => {
  let component: ControlStructuresComponent;
  let fixture: ComponentFixture<ControlStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStructuresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
