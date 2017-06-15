import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dances',
    template: '<div id="dances">Dances</div>',
    styles: [`#dances{color: red;}`]
})
export class DancesComponent implements OnInit {
    mainPage: boolean = false;   
    constructor(){}
    ngOnInit(){
        console.log('dances');
    }
}

