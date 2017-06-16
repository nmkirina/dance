import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'news',
    template: '<div id="news">News</div>',
    styles: [`#news{color: red;}`]
})
export class NewsComponent implements OnInit {
    ngOnInit(){
        console.log('News');
    }
}


