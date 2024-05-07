import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonStandaloneComponentComponent } from './non-standalone-component.component';

describe('NonStandaloneComponentComponent', () => {
  let component: NonStandaloneComponentComponent;
  let fixture: ComponentFixture<NonStandaloneComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonStandaloneComponentComponent]
    });
    fixture = TestBed.createComponent(NonStandaloneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
