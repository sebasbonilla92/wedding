import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { StayComponent } from './stay/stay.component';
import { ExploreComponent } from './explore/explore.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GoodToKnowComponent } from './good-to-know/good-to-know.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'rsvp/:id', component: RsvpComponent },
  { path: 'stay', component: StayComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'faq', component: GoodToKnowComponent },
  { path: '**', redirectTo: '' }
];
