import { Component, EventEmitter, Output } from '@angular/core';
import { ServerElement } from '../server-element/server-element.component';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
    @Output() serverCreated = new EventEmitter<ServerElement>();
    @Output() blueprintCreated = new EventEmitter<ServerElement>();
    newServerName = '';
    newServerContent = '';

    onAddServer() {
        this.serverCreated.emit({
            name: this.newServerName,
            content: this.newServerContent,
        });
    }

    onAddBlueprint() {
        this.blueprintCreated.emit({
            name: this.newServerName,
            content: this.newServerContent,
        });
    }
}
