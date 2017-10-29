import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTextBoxComponentComponent } from './child-text-box-component.component';

describe('ChildTextBoxComponentComponent', () => {
  let component: ChildTextBoxComponentComponent;
  let fixture: ComponentFixture<ChildTextBoxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTextBoxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTextBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
