import { Component } from '@angular/core';

@Component({
    selector: 'main-menu',
    template: `<ul class="nav nav-pills main-menu">
                <li><a href="#">Home</a></li>
                <li class="menu-item"><a href="#">About</a></li>
                <li><a href="#">Staff</a></li>
                <li><a href="#">Dances</a></li>
                <li class="active"><a href="#">History</a></li>
                <li><a href="#">Galary</a></li>
                <li><a href="#">Contact</a></li>
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


