import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import {StudentService} from './forms/studentservice';
import {StudentlistService} from './forms/studentlistservice';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [StudentService,StudentlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
