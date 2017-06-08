import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }   from './app.component';
import { MainPhotoComponent }   from './mainPhoto.component';
import { MainMenuComponent }   from './mainMenu.component';
@NgModule({
    imports:      [ BrowserModule, BrowserAnimationsModule ],
    declarations: [ AppComponent, MainPhotoComponent, MainMenuComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }


