import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { MyListComponent } from './my-list/my-list.component';
import { SomeComponent } from './some/some.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    MyListComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
