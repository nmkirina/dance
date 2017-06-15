import { Component, Input } from '@angular/core';

@Component({
    selector: 'dance-app',
    templateUrl: "app/app.component.html",
    styleUrls: ['app/app.component.css']
})
export class AppComponent { 
    @Input() mainPage: boolean = true;
    contructor(){
        console.log(this.mainPage);
    }
}

