import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'app/contact/contact.component.html',
    styles: [`agm-map {height: 300px;}`]
})
export class ContactComponent implements OnInit {
    title: string = 'Contact as';
    lat: number = 54.841356;
    lng: number = 83.107338;
    ngOnInit(){
        console.log('Contact');
    }
}

