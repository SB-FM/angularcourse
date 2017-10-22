import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = [
    { name: 'John Doe', likes: 12 },
    { name: 'Jane Doe', likes: 22 },
    { name: 'Mary Jane', likes: 92 }];
  constructor() { }

  ngOnInit() {
  }
  onFavoriteChanged(eventArgs) {
    console.log('Favorite changed: ', eventArgs);
  }
}
