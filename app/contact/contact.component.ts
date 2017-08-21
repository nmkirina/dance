import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'app/contact/contact.component.html',
    styles: [`agm-map {height: 300px;}
              #vk-link { float: right;}
            `]
})
export class ContactComponent implements OnInit {
    @Output() onChanged = new EventEmitter<string>();
    vkLink: string = "https://vk.com/club1847139";
    title: string = 'Наш адрес';
    lat_detskyi: number = 54.841356;
    lng_detskyi: number = 83.107338;
    lat_unost: number = 54.860206;
    lng_unost: number = 83.092962;
    zoom: number = 16;
    ngOnInit(){
        this.onChanged.emit('hidden');
        console.log('Contact');
    }
}

