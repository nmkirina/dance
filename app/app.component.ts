import { Component, OnInit} from '@angular/core';
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
        ]),
        trigger('visibilityPagesChanged', [
            state('visible', style({ height: '300px', opacity: 1})),
            state('hidden', style({ height: '0px', opacity: 0 })),
            transition('hidden => visible', animate('.7s'))
        ])
    ],
})
export class AppComponent implements OnInit{ 
    
    visibility: string = 'visible';
    visibilityPages: string = 'hidden';
    
    ngOnInit(){
        if(window.location.pathname != '/') {
            this.visibility = 'hidden';
        }
    }
    onChanged(flag:string){
        this.visibility = flag;
        this.visibilityPages = 'hidden';
    }
    showPages(flag: string){
        console.log(flag);
        this.visibilityPages = flag;
    }
}

