import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppProviders } from './app.providers';
import { AppComponent } from './app.component';
import {Router,Routes,RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormdataComponent } from './formdata/formdata.component';
import { FormaddComponent } from './formdata/formadd.component';
import { PhoneComponent } from './formdata/phone.component';

const AppRoutes: Routes = [
    /** 
     REGULAR ROUTES 
    **/
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
     { path: 'dashboard', component: DashboardComponent },
     { path: 'userList', component: FormdataComponent },
	  { path: 'addList', component: FormaddComponent },
	   { path: 'phoneList/:id', component: PhoneComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormdataComponent,
	FormaddComponent,
	PhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [AppProviders,AppProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
