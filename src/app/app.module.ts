import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CosComponent } from './cos/cos.component';
import { SinComponent } from './sin/sin.component';
import { MinComponent } from './min/min.component';
import { MaxComponent } from './max/max.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CosComponent,
    SinComponent,
    MinComponent,
    MaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
