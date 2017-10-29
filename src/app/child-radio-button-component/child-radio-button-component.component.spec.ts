import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRadioButtonComponentComponent } from './child-radio-button-component.component';

describe('ChildRadioButtonComponentComponent', () => {
  let component: ChildRadioButtonComponentComponent;
  let fixture: ComponentFixture<ChildRadioButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRadioButtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRadioButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
