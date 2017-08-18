import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'app/contact/contact.component.html',
    styles: [`agm-map {height: 300px;}`]
})
export class ContactComponent implements OnInit {
    @Output() onChanged = new EventEmitter<string>();
    title: string = 'Наш адрес';
    lat: number = 54.841356;
    lng: number = 83.107338;
    zoom: number = 16;
    ngOnInit(){
        this.onChanged.emit('hidden');
        console.log('Contact');
    }
}

