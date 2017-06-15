import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'about',
    template: '<div id="about">About</div>',
    styles: [`#about{color: red;}`]
})
export class AboutComponent implements OnInit {
    mainPage: boolean = false;   
    constructor(private router: Router){
        this.router.navigate(['about']);
    }
    ngOnInit(){
        console.log('About');
    }
}

