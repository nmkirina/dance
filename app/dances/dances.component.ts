import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dances',
    template: '<div id="dances">Dances</div>',
    styles: [`#dances{color: red;}`]
})
export class DancesComponent implements OnInit {
    constructor(){}
    ngOnInit(){
        console.log('dances');
    }
}

