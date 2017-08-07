import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'staff',
    templateUrl: "app/staff/staff.component.html",
    styles: [`
                .staff-li>img{
                    width: 100px;
                    height: 50px;    
                }
                
                        `],
    providers: [ HttpService ]
})
export class StaffComponent implements OnInit {
    items: any;
    constructor(private httpService: HttpService){}
    ngOnInit(){
        this.httpService.getStaff().subscribe((data) => {console.log(data.result);this.items = data.result;});
    }
}

