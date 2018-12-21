import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {EmpParent} from './cart.parent.component';
import {EmpChild} from './cart.child.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpParent,
    EmpChild
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }