import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'about',
    template: `
        <img src="{{item.fullurl}}" class="avatar">
        <div class="person-description">
            <h2>{{item.name}}</h2>
            <p>Художественный руководитель</p>
            <p>{{item.description}}</p>
        </div>
    `,
    styleUrls: [`app/style/main.css`],
    providers: [ HttpService ]
})
export class AboutComponent implements OnInit {
    
    item: object = {'fullurl': '', 'name': '', 'description': ''};
    
    constructor(private httpService: HttpService){}
    ngOnInit(){
        this.httpService.getArtDirector().subscribe((data) => {this.item = data.result;});
    }
}

