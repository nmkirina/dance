import { Component, OnInit} from '@angular/core';
import { animate, style, trigger, state, transition } from '@angular/animations';

@Component({
    selector: 'main-photo',
    template: `<div class="picture"><img src="img/{{image}}" [@visibilityChanged]="visibility"></div>`,
    styles: [`img {width: 500; height: 500; }`],
    animations: [
        trigger('visibilityChanged', [
            state('visible', style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('* => *', animate('.5s'))
        ])
    ],
})
export class MainPhotoComponent { 
    
    extension = '.jpg';
    image: string = '0.jpg';
    visibility: string = "hidden";
    i: number = 0;
    imageCount:number = 11;
        
    ngOnInit(){
        setInterval(() => {
            let that = this;
             setTimeout(function() {
                    that.visibility = 'hidden';
                  }, 1000);
            this.i++;
            if (this.i > this.imageCount) {
                this.i = 0;
            }
            this.image = this.i + this.extension;
            this.visibility = 'visible';
          }, 2000);
    }
}



