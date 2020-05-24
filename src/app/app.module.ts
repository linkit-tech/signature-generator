import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SignatureOutputComponent } from './signature-output/signature-output.component';
import { LeadingPositionPipe } from './leading-position.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    SignatureOutputComponent,
    LeadingPositionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
