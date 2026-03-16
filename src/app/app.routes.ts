import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: '**', redirectTo: '' }
];
