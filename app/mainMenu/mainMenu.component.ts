import { Component } from '@angular/core';

@Component({
    selector: 'main-menu',
    template: `<ul class="nav nav-pills main-menu">
                <li routerLinkActive="active"
                [routerLinkActiveOptions]="{exact:true}"><a routerLink="">Home</a></li>
                <li routerLinkActive="active"><a routerLink="/about">About</a></li>
                <li routerLinkActive="active"><a routerLink="/staff">Staff</a></li>
                <li routerLinkActive="active"><a routerLink="/dances">Dances</a></li>
                <li routerLinkActive="active"><a routerLink="/history">History</a></li>
                <li routerLinkActive="active"><a routerLink="/galary">Galary</a></li>
                <li routerLinkActive="active"><a routerLink="/contact">Contact</a></li>
              </ul>
              `,
    styles: [`.main-menu > li{
                    margin-left: 12px;
                    font-family: monospace;
                    font-size: x-large;
                }
               .main-menu > li > a{
                    color: black !important;
                }
                .main-menu > li.active > a{
                    background-color: azure;
                    opacity: 0.6;
                }
                .main-menu > li.hover > a{
                    background-color: azure;
                    opacity: 0.6;
                }
                .main-menu {
                    position: relative;
                    top: 100;
                    left: 20px;
                    background-image: url(img/background-main-menu.jpg);
                    border-radius: 13px;
                }
                `]
})
export class MainMenuComponent {}


