import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { MainPhotoComponent }   from './mainPhoto/mainPhoto.component';
import { MainMenuComponent }   from './mainMenu/mainMenu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DancesComponent } from './dances/dances.component';
import { GalaryComponent } from './galary/galary.component';
import { HistoryComponent } from './history/history.component';
import { StaffComponent } from './staff/staff.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';

const appRoutes: Routes = [
        {path: '', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'dances', component: DancesComponent},
        {path: 'galary', component: GalaryComponent},
        {path: 'history', component: HistoryComponent},
        {path: 'staff', component: StaffComponent},
        {path: '**', component: NotfoundComponent}
    ];
@NgModule({
    imports:      [ 
        BrowserModule, 
        BrowserAnimationsModule, 
        RouterModule.forRoot(appRoutes),
        routing ],
    declarations: [ 
        AppComponent, 
        MainPhotoComponent, 
        MainMenuComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        DancesComponent,
        GalaryComponent,
        HistoryComponent,
        StaffComponent,
        NotfoundComponent
          ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { 
    constructor() {}
}


