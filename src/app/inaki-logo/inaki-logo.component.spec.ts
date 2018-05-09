import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InakiLogoComponent } from './inaki-logo.component';

describe('InakiLogoComponent', () => {
  let component: InakiLogoComponent;
  let fixture: ComponentFixture<InakiLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InakiLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InakiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
