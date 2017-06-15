import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'dance-app',
    templateUrl: "app/app.component.html",
    styleUrls: ['app/app.component.css'],
    providers: [DataService]
})
export class AppComponent implements OnInit{ 
    mainPage: boolean;
    constructor(private dataService: DataService){
        this.dataService.setMainPageFlag(true);
        console.log(this.mainPage);
    }
    ngOnInit(){
        this.mainPage = this.dataService.getMainPageFlag();
    }
}

