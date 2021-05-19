import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLocaleComponent } from './delete-locale.component';

describe('DeleteLocaleComponent', () => {
  let component: DeleteLocaleComponent;
  let fixture: ComponentFixture<DeleteLocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLocaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
