import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notfound',
    template: '<div id="notfound">Not found</div>',
    styles: [`#staff{color: red;}`]
})
export class NotfoundComponent implements OnInit {
    constructor(){}
    ngOnInit(){
        console.log('not found ');
    }
}

