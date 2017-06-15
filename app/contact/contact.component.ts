import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'contact',
    template: '<div id="contact">Contact</div>',
    styles: [`#contact{color: red;}`]
})
export class ContactComponent implements OnInit {
    mainPage: boolean = false;   
    constructor(private router: Router){
        this.router.navigate(['contact']);
    }
    ngOnInit(){
        console.log('Contact');
    }
}

