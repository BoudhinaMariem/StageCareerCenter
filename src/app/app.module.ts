import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarAltComponent } from './components/navbar-alt/navbar-alt.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { StudentComponent } from './components/student/student.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarAltComponent,
    HomeComponent,
    LoginComponent,
    OverviewComponent,
    StudentComponent,
    AlumniComponent,
    ChatbotComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
