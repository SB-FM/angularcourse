import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorsComponent } from './authors/authors.component';
import { PanelComponent } from './panel/panel.component';
import { MapviewComponent } from './mapview/mapview.component';
import { CommentComponent } from './comment/comment.component';
import { AddressComponent } from './address/address.component';
import { ChildRadioButtonComponentComponent } from './child-radio-button-component/child-radio-button-component.component';
import { ChildTextBoxComponentComponent } from './child-text-box-component/child-text-box-component.component';
import { AttributesComponent } from './attributes/attributes.component';
import { SearchPipe } from './search.pipe';
import { UnselectedPipe } from './unselected.pipe';
import { ZippyComponent } from './zippy/zippy.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    AuthorsComponent,
    PanelComponent,
    MapviewComponent,
    CommentComponent,
    AddressComponent,
    ChildRadioButtonComponentComponent,
    ChildTextBoxComponentComponent,
    AttributesComponent,
    SearchPipe,
    UnselectedPipe,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
