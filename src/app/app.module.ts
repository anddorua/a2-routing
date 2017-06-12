import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { MdToolbarModule, MdButtonModule, MdInputModule, MdListModule, MdGridListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';

import 'hammerjs';
import { SettingsComponent } from './settings/settings.component';
import { AuthenticatorService } from './authenticator.service';

const APP_ROUTES = [
  { path: 'public', component: PublicComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthenticatorService] },
  { path: '', redirectTo: '/public', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdGridListModule
  ],
  exports: [
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdGridListModule
  ],
  providers: [
    AuthenticatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
