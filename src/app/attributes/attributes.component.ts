import { AD_VALUES } from './../attribute-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  search: string = '';
  AD_VALUES: string[] = AD_VALUES;
  selectedAttribute: string = this.AD_VALUES[0];
  attributeList = [];
  isSearchVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSearchFocus() {
    this.isSearchVisible = !this.isSearchVisible;
  }
  addAttribute(selection) {
    this.attributeList.push(
      {
        attributeName: selection,
        attributeValue: 'No Value'

      }
    );
    this.attributeList = this.attributeList.slice();
  }
  removeAttribute(selection, index) {

    this.attributeList.splice(index, 1);
    this.attributeList = this.attributeList.slice();
  }

  log() {
    console.log(this.attributeList);
  }
}
