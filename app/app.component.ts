import { Component} from '@angular/core';
import { animate, style, trigger, state, transition } from '@angular/animations';

@Component({
    selector: 'dance-app',
    templateUrl: "app/app.component.html",
    styleUrls: ['app/app.component.css'],
    animations: [
        trigger('visibilityChanged', [
            state('visible', style({ height: '300px', opacity: 1})),
            state('hidden', style({ height: '0px', opacity: 0 })),
            transition('* => *', animate('.5s'))
        ])
    ],
})
export class AppComponent{ 
    
    visibility: string = 'visible';
    onChanged(flag:string){
        this.visibility = flag;
    }
}

