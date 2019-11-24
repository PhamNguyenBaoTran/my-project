import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemlaibaithiComponent } from './xemlaibaithi.component';

describe('XemlaibaithiComponent', () => {
  let component: XemlaibaithiComponent;
  let fixture: ComponentFixture<XemlaibaithiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemlaibaithiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemlaibaithiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
