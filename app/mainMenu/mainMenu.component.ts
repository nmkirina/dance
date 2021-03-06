import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'main-menu',
    templateUrl: "app/mainMenu/mainMenu.component.html",
    styleUrls: ["app/mainMenu/mainMenu.component.css"],
})
export class MainMenuComponent {
    @Output() onChanged = new EventEmitter<string>();
    @Output() showPages = new EventEmitter<string>();
    change(flag:string){
        this.onChanged.emit(flag);
        let that = this;
        setTimeout(function() {
                    that.showPages.emit('visible');
                  }, 100);        
    }
}


