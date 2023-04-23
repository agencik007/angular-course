import { Component, Input } from '@angular/core';

export interface ServerElement {
    name: string;
    type?: string;
    content: string;
}

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
    @Input('srvElement') element: ServerElement;
}
