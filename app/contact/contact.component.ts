import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    template: '<div id="contact">Contact</div>',
    styles: [`#contact{color: red;}`]
})
export class ContactComponent implements OnInit {
    ngOnInit(){
        console.log('Contact');
    }
}

