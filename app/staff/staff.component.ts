import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'staff',
    templateUrl: "app/staff/staff.component.html",
    styles: [`
                .staff-li> a > img{
                    width: 200px;
                    height: 200px;
                    background: rgb(166, 166, 166);
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 4px;
                }
                
                .staff-li {
                    display: inline-block;
                    float: left;
                    margin-right: 1px;
                }
                
                .staff-li > p{
                    text-align: center;
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

