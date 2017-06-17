import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
    selector: 'history',
    template: `<div *ngIf="done">{{factorial}}</div>
                <div class="form-group">
                    <label>Введите число</label>
                    <input class="form-control" type="number" name="factorial"  />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(1)">Отправить</button>
                </div>`,
    styles: [`#history{color: red;}`],
    providers: [HttpService]
})
export class HistoryComponent implements OnInit {
    @Output() onChanged = new EventEmitter<string>();
    ngOnInit(){
        this.onChanged.emit('hidden');
    }
    factorial: number;
    done: boolean = false;
    constructor(private httpService: HttpService){}
    submit(num: number){
        console.log(num);
        this.httpService.getFactorial(num)
                .subscribe((data) => {this.factorial=data; this.done=true;});
    }
}
