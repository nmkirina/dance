import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'gallery1',
    template: `<div id="gallery1">
                  <gallery [metadataUri]="'./app/gallery/data.json'"></gallery>  
                </div>
               `,
    providers: [ HttpService ]
})
export class GalleryComponent implements OnInit {
    items: any;
    images: any;
    
    constructor(private httpService: HttpService){}
    ngOnInit(){
        
//        this.httpService.getGallery().subscribe((data) => 
//        {
//            this.items = data.result;
//        });
    }
}