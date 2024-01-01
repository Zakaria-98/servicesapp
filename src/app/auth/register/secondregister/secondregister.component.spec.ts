import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondregisterComponent } from './secondregister.component';

describe('SecondregisterComponent', () => {
  let component: SecondregisterComponent;
  let fixture: ComponentFixture<SecondregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
