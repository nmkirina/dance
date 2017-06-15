import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DancesComponent } from './dances/dances.component';
import { GalaryComponent } from './galary/galary.component';
import { HistoryComponent } from './history/history.component';
import { StaffComponent } from './staff/staff.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'dances', component: DancesComponent},
  { path: 'galary', component: GalaryComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'staff', component: StaffComponent},
  { path: 'notfound', component: NotfoundComponent},
];

export const routing = RouterModule.forRoot(routes);
