import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';

//@ViewChild('text')
@Component({
    selector: 'news',
    templateUrl: 'app/news/news.component.html',
    styles: [`#news{color: red;}`],
     providers: [HttpService]
})
export class NewsComponent implements OnInit {
    items: any;
    visibility: string[] = ['hidden'];
    constructor(private httpService: HttpService){}
    ngOnInit(){
        this.httpService.getNews()
                .subscribe((data) => { 
                             
                            this.items = data.result;
                    });
                
        
    }
    toggle(item: any){
        if(item.opened){
            item.opened = false;
        } else {
            item.opened = true;
        }
    }
}


