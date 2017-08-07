import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
    selector: 'history',
    template: `<div>
                    <ul *ngFor="let item of items">
                        <li>
                            <h1>{{item.year}}</h1>
                            <div>{{item.text}}</div>
                        </li>
                    </ul>
               </div>`,
    styles: [`#history{color: red;}`],
    providers: [HttpService]
})
export class HistoryComponent implements OnInit {
    items: any;
    constructor(private httpService: HttpService){}
    ngOnInit(){
        this.httpService.getHistory()
                .subscribe((data) => {console.log(data);this.items = data.result;});
    }
}
