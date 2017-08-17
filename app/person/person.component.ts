import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivateRoute }from '@angular/router';

@Component({
    selector: 'person',
    templateUrl: "app/person/person.component.html",
    styles: [` `],
    providers: [ HttpService ]
})
export class PersonComponent implements OnInit {
    items: any;
    id: string;
    constructor(private httpService: HttpService, public activateRoute: ActivateRoute){}
    ngOnInit(){
        console.log('sdfkgdfsg');
//        this.id = this.activateRoute.params['id'];
//        this.httpService.getPerson(this.id).subscribe((data) => {console.log(data.result);this.items = data.result;});
    }
}


