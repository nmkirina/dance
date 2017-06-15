import { Component, OnInit, Output } from '@angular/core';

@Component({
    selector: 'galary',
    template: '<div id="galary">Galary</div>',
    styles: [`#galary{color: red;}`]
})
export class GalaryComponent implements OnInit {
    
    @Output() mainPage: boolean = false;
      ngOnInit(){
        console.log('Galary');
    }
}