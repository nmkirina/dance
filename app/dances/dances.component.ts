import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'dances',
    templateUrl: "app/html-template/item-with-picture.component.html",
    styles: [`#dances>img{
                    width: 300px;
                    height: 200px;    
                }
                #dances{
                    position: relative;
                }`],
    providers: [HttpService]
})
export class DancesComponent implements OnInit {
    
    items: any;
    
    constructor(private httpService: HttpService){}
    ngOnInit(){
        this.httpService.getDances().subscribe(error => {console.log(error)});
        
        this.httpService.getDances().subscribe((data) => {this.items = data;});
    }
    
}

