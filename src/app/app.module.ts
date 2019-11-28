import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import { OriginInterceptor } from './core/interceptors/origin.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [
    // [
    //   { provide: HTTP_INTERCEPTORS, useClass: OriginInterceptor, multi: true }
    // ],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
