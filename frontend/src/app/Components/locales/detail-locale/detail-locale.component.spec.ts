import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLocaleComponent } from './detail-locale.component';

describe('DetailLocaleComponent', () => {
  let component: DetailLocaleComponent;
  let fixture: ComponentFixture<DetailLocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLocaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
