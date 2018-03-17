import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingSlotsComponentComponent } from './selling-slots-component.component';

describe('SellingSlotsComponentComponent', () => {
  let component: SellingSlotsComponentComponent;
  let fixture: ComponentFixture<SellingSlotsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingSlotsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingSlotsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
