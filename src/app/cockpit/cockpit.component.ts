import { Component, EventEmitter, Output } from '@angular/core';
import { ServerElement } from '../types/server.element.type';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
    @Output() serverCreated = new EventEmitter<ServerElement>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<ServerElement>();
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
