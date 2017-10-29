import { AD_VALUES } from './../attribute-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  AD_VALUES: string[] = AD_VALUES;
  selectedAttribute: string = this.AD_VALUES[0];
  isExpanded: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onChange(city) {
    console.log(city);
  }
  onExpand() {
    this.isExpanded = !this.isExpanded;
  }

}
