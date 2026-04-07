import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { StayComponent } from './stay/stay.component';
import { ExploreComponent } from './explore/explore.component';
import { GoodToKnowComponent } from './good-to-know/good-to-know.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomeComponent,
    DetailsComponent,
    RsvpComponent,
    StayComponent,
    ExploreComponent,
    GoodToKnowComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
