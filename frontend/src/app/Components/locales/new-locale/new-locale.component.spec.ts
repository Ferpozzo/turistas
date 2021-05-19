import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocaleComponent } from './new-locale.component';

describe('NewLocaleComponent', () => {
  let component: NewLocaleComponent;
  let fixture: ComponentFixture<NewLocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLocaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
