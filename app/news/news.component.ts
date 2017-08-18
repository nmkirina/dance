import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'news',
    templateUrl: 'app/news/news.component.html',
    styleUrls: ["app/style/main.css", "app/news/news.component.css"],
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


