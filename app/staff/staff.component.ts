import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'staff',
    template: '<div id="staff">Staff</div>',
    styles: [`#staff{color: red;}`]
})
export class StaffComponent implements OnInit {
    mainPhoto: boolean = false;   
    constructor(){}
    ngOnInit(){
        console.log('Staff');
    }
}

