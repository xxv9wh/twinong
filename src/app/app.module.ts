import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ModaluploadComponent } from './modalupload/modalupload.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent,
    ModaluploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
