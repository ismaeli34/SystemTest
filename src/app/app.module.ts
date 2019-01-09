import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {ShowDetailsComponent} from './show-details/show-details.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CustomFormsModule} from 'ng2-validation';

const routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', component: SignUpComponent},
  {path: 'show-details', component: ShowDetailsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ShowDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
