import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ObjectComponent } from './object/object.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { UpdateComponent } from './update/update.component';
import { RepassComponent } from './repass/repass.component';
import { XemlaibaithiComponent } from './xemlaibaithi/xemlaibaithi.component';

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
    XemlaibaithiComponent,
    RepassComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([ 
      { path: '', 	component: IndexComponent }, 
      {path: 'contact', component:ContactComponent},
      {path: 'introduce', component:IntroduceComponent},
      {path: 'login', component:LoginComponent},
      {path: 'object', component:ObjectComponent},
      {path: 'register', component:RegisterComponent},
      {path: 'update', component:UpdateComponent},
      {path: 'repass', component:RepassComponent},
      {path: 'object/:Id', component:TestComponent},
      {path:'xembaithi', component:XemlaibaithiComponent},
      { path: '**', redirectTo: 'index', pathMatch: 'full' },
  ])
],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
