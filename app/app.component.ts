import { Component} from '@angular/core';

@Component({
    selector: 'dance-app',
    templateUrl: "app/app.component.html",
    styleUrls: ['app/app.component.css'],
})
export class AppComponent{ 
    
    mainPage: boolean = true;
    onChanged(flag:boolean){
        this.mainPage = flag;
    }
}

