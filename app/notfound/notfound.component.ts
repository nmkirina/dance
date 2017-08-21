import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notfound',
    template: `<div id="oops">
                    <h1>Страница не найдена</h1>
                    <img src="img/oops.jpg">
                    
                </div>`,
    styles: [`#oops > h1 {
                text-align: center;
              }  
              #oops > img{
                    position: relative;
                    left: 25%;
                    top: 5%;
              }
                `]
})
export class NotfoundComponent implements OnInit {
    constructor(){}
    ngOnInit(){
        console.log('not found ');
    }
}

