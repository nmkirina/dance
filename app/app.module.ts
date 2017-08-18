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
import { GalleryComponent } from './gallery/gallery.component';
import { HistoryComponent } from './history/history.component';
import { StaffComponent } from './staff/staff.component';
import { PersonComponent } from './person/person.component';
import { DanceComponent } from './dance/dance.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import {AgmCoreModule} from '@agm/core';

import 'web-animations-js';
import 'hammerjs';
import 'web-animations-js';

const appRoutes: Routes = [
        {path: '', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'dances', component: DancesComponent},
        {path: 'gallery', component: GalleryComponent},
        {path: 'history', component: HistoryComponent},
        {path: 'staff', component: StaffComponent},
        {path: 'staff/person/:id', component: PersonComponent},
        {path: 'dances/dance/:id', component: DanceComponent},
        {path: 'news', component: NewsComponent},
        {path: '**', component: NotfoundComponent}
    ];
@NgModule({
    imports:      [ 
        BrowserModule, 
        BrowserAnimationsModule, 
        RouterModule.forRoot(appRoutes),
        routing,
        HttpModule,
        Angular2ImageGalleryModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbEgdQZwCeCSu--qk5L9iXc7FT-cWdlms'})
       ],
    declarations: [ 
        AppComponent, 
        MainPhotoComponent, 
        MainMenuComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        DancesComponent,
        DanceComponent,
        GalleryComponent,
        NewsComponent,
        HistoryComponent,
        StaffComponent,
        NotfoundComponent,
        PersonComponent
          ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { 
    constructor() {}
}


