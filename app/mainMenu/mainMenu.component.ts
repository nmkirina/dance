import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'main-menu',
    templateUrl: "app/mainMenu/mainMenu.component.html",
    styleUrls: ["app/mainMenu/mainMenu.component.css"],
})
export class MainMenuComponent {
    @Output() onChanged = new EventEmitter<boolean>();
    change(flag:boolean){
        this.onChanged.emit(flag);
    }
}


