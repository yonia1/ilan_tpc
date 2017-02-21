import { Component, ElementRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],encapsulation: ViewEncapsulation.None,


})

export class AppComponent {
    navItems = [
        {name: 'Start race', route: 'autocomplete'},
        {name: 'Build plan', route: 'button'},
        {name: 'What is tpc', route: 'button-toggle'},
        {name: 'Who is Ilan', route: 'card'},


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
