import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessToSessionComponent } from './access-to-session.component';

describe('AccessToSessionComponent', () => {
  let component: AccessToSessionComponent;
  let fixture: ComponentFixture<AccessToSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessToSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessToSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
