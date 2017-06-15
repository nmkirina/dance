import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'home',
    template: '',
})
export class HomeComponent implements OnInit {
    mainPage: boolean = true;
    constructor(){}
    ngOnInit(){
        console.log('home');
    }
}

