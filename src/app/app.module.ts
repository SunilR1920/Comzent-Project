import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule,Routes } from '@angular/router';
// import { MaterialUIComponent} from '@angular/material';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
  ];


@NgModule({
    imports:[
        BrowserModule,
        RouterModule,
        AppComponent,
        LoginComponent,
        ReactiveFormsModule,
        SignupComponent,
        // MaterialUIComponent
    ],
    providers: [],
//   bootstrap: [AppComponent]
    exports:[RouterModule]

})

export class AppModule {}