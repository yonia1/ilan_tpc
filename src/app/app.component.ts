import { Component, ElementRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],encapsulation: ViewEncapsulation.None,


})

export class AppComponent {
    navItems = [
        {name: 'User Details', route: 'app-user-details'},
        {name: 'Build plan', route: 'app-plan'}



    ];

    constructor(private _element: ElementRef) {

    }

    toggleFullscreen() {
        let elem = this._element.nativeElement.querySelector('.demo-content');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    }
}
