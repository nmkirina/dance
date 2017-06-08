import { Component } from '@angular/core';

@Component({
    selector: 'main-menu',
    template: `<ul class="nav nav-pills pull-right main-menu">
                <li class="active"><a href="#">Home</a></li>
                <li class="menu-item"><a href="#">About</a></li>
                <li><a href="#">Staf</a></li>
                <li><a href="#">Dances</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Galary</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
              `,
    styles: [`.main-menu > li{
                    margin-left: 12px;
                    color: black !important;
                    font-family: monospace;
                    font-size: x-large;
                }`]
})
export class MainMenuComponent {}


