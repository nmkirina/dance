import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'gallery',
    template: `<div id="gallery">
                <img *ngFor="let item of items" src='{{item.fullurl}}' width="100">
                </div>`,
    styles: [`#gallery{color: red;}`],
    providers: [ HttpService ]
})
export class GalleryComponent implements OnInit {
    items: any;
    constructor(private httpService: HttpService){}
    ngOnInit(){
        
        this.httpService.getGallery().subscribe((data) => {console.log(data.result); this.items = data.result;});
    }
}