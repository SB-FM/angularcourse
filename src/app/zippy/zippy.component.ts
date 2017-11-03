import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent implements OnInit {
  @Input() title;
  isExpanded:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onExpand(){
    this.isExpanded = !this.isExpanded;
  }
}
