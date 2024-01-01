import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraldialogComponent } from './generaldialog.component';

describe('GeneraldialogComponent', () => {
  let component: GeneraldialogComponent;
  let fixture: ComponentFixture<GeneraldialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraldialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneraldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
