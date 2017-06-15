import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'history',
    template: '<div id="history">History</div>',
    styles: [`#history{color: red;}`]
})
export class HistoryComponent implements OnInit {
    mainPage: boolean = false;
        ngOnInit(){
        console.log('History');
    }
}
