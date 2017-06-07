import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';
@NgModule({
    imports:      [ BrowserModule, BrowserAnimationsModule ],
    declarations: [ AppComponent, ChildComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }


