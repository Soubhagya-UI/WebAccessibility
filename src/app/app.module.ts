import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { VideoComponent } from './video/video.component';
import { TableComponent } from './table/table.component'

let routes : Routes = [
  // {
  //   path:"",
  //   component:AppComponent
  //  },
   {
    path:"login",
    component:LoginComponent
   },
  {
  path:"dashboard",
  component:DashboardComponent
 },
 {
  path:"error",
  component:ErrorComponent
 },
 {
  path:"video",
  component:VideoComponent
 },
 {
  path:"table",
  component:TableComponent
 }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    VideoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
