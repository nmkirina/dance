import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute }from '@angular/router';

@Component({
    selector: 'dance',
    templateUrl: "app/dance/dance.component.html",
    styleUrls: ["app/style/main.css"],
    providers: [ HttpService ]
})
export class DanceComponent implements OnInit 
{
    item: any;
    id: string;
    constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute)
    {
        this.id = activatedRoute.snapshot.params['id'];
        this.item = {'fullurl': 'url', 'start_date': 'date'};
    }
    ngOnInit()
    {
        this.httpService.getDance(this.id).subscribe((data) => {console.log(data.result);this.item = data.result;});
    }
    sendComment(text: string)
    {
        this.httpService.sendComment(text, this.id).subscribe((data) => {console.log(data.result);});
    }
}




