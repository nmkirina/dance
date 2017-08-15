import { Component } from '@angular/core';
@Component({
    selector: 'gallery1',
    template: `<div id="gallery1">
                  <gallery [metadataUri]="'./uploads/data.json'"></gallery>
                </div>
               `
})
export class GalleryComponent{
    constructor(){}
}