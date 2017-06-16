import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'history',
    template: '<div id="history">History</div>',
    styles: [`#history{color: red;}`]
})
export class HistoryComponent implements OnInit {
    ngOnInit(){
        console.log('History');
    }
}
