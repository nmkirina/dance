import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dances',
    templateUrl: "app/dances/dances.component.html",
    styles: [`#dances>img{
                    width: 300px;
                    height: 200px;    
                }
                #dances{
                    position: relative;
                    top: 200px;
                    left: 100px;
                }`]
})
export class DancesComponent implements OnInit {
    constructor(){}
    ngOnInit(){
        
        console.log('dances');
    }
}

