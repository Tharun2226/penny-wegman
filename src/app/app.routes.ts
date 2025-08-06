import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonateComponent } from './components/donate/donate.component';
import { HowToVoteComponent } from './components/how-to-vote/how-to-vote.component';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'how-to-vote', component: HowToVoteComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
