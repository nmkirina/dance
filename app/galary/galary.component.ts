import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'galary',
    template: `<div id="galary">
                <img *ngFor="let item of items")>
                </div>`,
    styles: [`#galary{color: red;}`],
})
export class GalaryComponent implements OnInit {
    items: any;
    constructor(private httpService: HttpService){}
    ngOnInit(){
        console.log('About');
        this.httpService.getHistory().subscribe((data) => {this.items = data.result;});
    }
}