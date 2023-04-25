import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ServerElement } from '../types/server.element.type';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
    @Input('srvElement') element: ServerElement;
}
