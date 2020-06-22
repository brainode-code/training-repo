import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { MyListComponent } from './my-list/my-list.component';
import { SomeComponent } from './some/some.component';
import { AddListItemComponent } from './add-list-item/add-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    MyListComponent,
    SomeComponent,
    AddListItemComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
