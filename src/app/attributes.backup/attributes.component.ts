import { AD_VALUES } from './../attribute-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  AD_VALUES: string[] = AD_VALUES;
  selectedAttribute: string = this.AD_VALUES[0];
  AttributeList = [
    {
      id: 0,
      attributeName: 'test',
      attributeValue: 'testValue',

    },
    {
      id: 1,
      attributeName: 'test2',
      attributeValue: 'testValue2',
    },
  ];


  constructor() { }

  ngOnInit() {
  }

  onExpand(index) {
    console.log(this.AttributeList[index]);


  }
  log(){
    console.log(this.AttributeList);
  }
}
