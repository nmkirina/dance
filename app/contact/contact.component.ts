import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'app/contact/contact.component.html',
    styles: [`agm-map {height: 300px;}`]
})
export class ContactComponent implements OnInit {
    title: string = 'Contact us';
    lat: number = 54.841356;
    lng: number = 83.107338;
    zoom: number = 16;
    ngOnInit(){
        console.log('Contact');
    }
}

