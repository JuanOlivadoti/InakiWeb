import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InakiNavbarComponent } from './inaki-navbar.component';

describe('InakiNavbarComponent', () => {
  let component: InakiNavbarComponent;
  let fixture: ComponentFixture<InakiNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InakiNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InakiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
