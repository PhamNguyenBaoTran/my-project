import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ObjectComponent } from './object/object.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ObjectComponent,
    IntroduceComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    TestComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot([ 
      { path: '', 	component: IndexComponent }, 
      {path: 'contact', component:ContactComponent},
      {path: 'introduce', component:IntroduceComponent},
      {path: 'login', component:LoginComponent},
      {path: 'object', component:ObjectComponent},
      {path: 'register', component:RegisterComponent},
      {path: 'update', component:UpdateComponent},
      {path: 'object.id', component:TestComponent},
      { path: '**', redirectTo: 'index', pathMatch: 'full' },
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
