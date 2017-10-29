import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child-text-box-component',
  templateUrl: './child-text-box-component.component.html',
  styleUrls: ['./child-text-box-component.component.scss']
})
export class ChildTextBoxComponentComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
