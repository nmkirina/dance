import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'staff',
    templateUrl: "app/staff/staff.component.html",
    styleUrls: ["app/staff/staff.component.css", "app/style/main.css"],
    providers: [ HttpService ]
})
export class StaffComponent implements OnInit {
    items: any;
    constructor(private httpService: HttpService){}
    ngOnInit(){
        this.httpService.getStaff().subscribe((data) => {console.log(data.result);this.items = data.result;});
    }
}

