import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'about',
    template: '<div id="about">About</div>',
    styles: [`#about{color: red;}`]
})
export class AboutComponent implements OnInit {
    ngOnInit(){
        console.log('About');
    }
}

