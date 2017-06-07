import { Component, OnInit} from '@angular/core';
import { animate, style, trigger, state, transition } from '@angular/animations';

@Component({
    selector: 'child-comp',
    template: `<div class="picture"><img src="img/{{image}}" [@visibilityChanged]="visibility"></div>`,
    styles: [`img {width: 400; height: 400; position:absolute; }`],
    animations: [
        trigger('visibilityChanged', [
            state('visible', style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('* => *', animate('.5s'))
        ])
    ],
})
export class ChildComponent { 
 
    images:Array<string> = ['196120_900.jpg', '3zJfho.jpg', '4577041_orig.jpg',
        '47aeb3fa2aae2e4da9054ca35cd07231.jpg', '5062915_600.jpg', '8e11ff132786d2a8af2479dc6726fd1e.jpg',
        'CityDance_alice.leap_byPaulGordonEmerson.jpg', 'contemporary.jpg', 'dancer_jump.jpg',
        'female-dancer-against-white-background.jpg', 'images.jpg', 'maxresdefault.jpg',
        'silhouette-photos-dancers-Erik-Saulitis-00.jpg'];
        
    image: string = this.images[0];
    visibility: string = "visible";
        
    ngOnInit(){
        setInterval(() => {
            let that = this;
             setTimeout(function() {
                    that.visibility = 'hidden';
                  }, 1000);
            
            this.image = this.images[Math.floor(Math.random() * 10) + 1];
            
            this.visibility = 'visible';
           
          }, 2000);
    }
}



