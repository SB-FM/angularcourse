import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorsComponent } from './authors/authors.component';
import { PanelComponent } from './panel/panel.component';
import { MapviewComponent } from './mapview/mapview.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    AuthorsComponent,
    PanelComponent,
    MapviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
