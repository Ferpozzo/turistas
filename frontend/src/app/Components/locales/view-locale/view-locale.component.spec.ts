import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocaleComponent } from './view-locale.component';

describe('ViewLocaleComponent', () => {
  let component: ViewLocaleComponent;
  let fixture: ComponentFixture<ViewLocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLocaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
