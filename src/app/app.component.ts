import { Component, ElementRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],encapsulation: ViewEncapsulation.None,


})

export class AppComponent {
    navItems = [
        {name: 'Autocomplete', route: 'autocomplete'},
        {name: 'Button', route: 'button'},
        {name: 'Button Toggle', route: 'button-toggle'},
        {name: 'Card', route: 'card'},
        {name: 'Chips', route: 'chips'},
        {name: 'Checkbox', route: 'checkbox'},
        {name: 'Dialog', route: 'dialog'},
        {name: 'Gestures', route: 'gestures'},
        {name: 'Grid List', route: 'grid-list'},
        {name: 'Icon', route: 'icon'}

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
