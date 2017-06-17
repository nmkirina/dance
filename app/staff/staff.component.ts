import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'staff',
    templateUrl: "app/staff/staff.component.html",
    styles: [`
                .staff-li>img{
                    width: 100px;
                    height: 50px;    
                }
                
                        `]
})
export class StaffComponent implements OnInit {
    items = ["Ivan Ivanov", "Ivan Petrov", "Stepan Lugkov"];
    constructor(){}
    ngOnInit(){
        console.log('Staff');
    }
}

