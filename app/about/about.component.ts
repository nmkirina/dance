import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'about',
    template: `<div id="dances">
    <div *ngFor="let item of items">
        <span><h1>{{item.year}}</h1></span>
        <span>{{item.text}}</span>
    </div>
</div>`,
    styles: [`#about{
                position: relative;
                left: 20px;
                }`],
    providers: [ HttpService ]
})
export class AboutComponent implements OnInit {
    
    items: any;
    constructor(private httpService: HttpService){}
    ngOnInit(){
        console.log('About');
        this.httpService.getHistory().subscribe((data) => {this.items = data.result;});
    }
}

