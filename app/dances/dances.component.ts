import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'dances',
    templateUrl: "app/dances/dances.component.html",
    styleUrls: ["app/dances/dances.component.css", "app/style/main.css"],
    providers: [HttpService]
})
export class DancesComponent implements OnInit {
    
    items: any;
    
    constructor(private httpService: HttpService){}
    ngOnInit(){
        this.httpService.getDances().subscribe(error => {console.log(error)});
        this.httpService.getDances().subscribe((data) => {this.items = data.result;});
        
    }
    
}

