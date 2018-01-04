import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './guard/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotfoundComponent}
];

// export const firebaseConfig = {
//     apiKey: '',
//     authDomain: '',
//     databaseURL: '',
//     storageBucket: '',
//     messagingSenderId: ''
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NotfoundComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
      UserService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
