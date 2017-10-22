import { Author } from './../authors/author';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  @Input() author: Author;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.isFavorite = !this.isFavorite;
    this.author.likes += this.isFavorite ? 1 : -1;
    this.change.emit(this.author);
  }
}

