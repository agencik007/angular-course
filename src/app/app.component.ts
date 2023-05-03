import { Component } from '@angular/core';
import { ServerElement } from './types/server.element.type';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    serverElements: ServerElement[] = [
        {
            content: 'just a test',
            name: 'test server',
            type: 'server',
        },
    ];

    onServerAdded(serverData: ServerElement) {
        this.serverElements.push({
            type: 'server',
            name: serverData.name,
            content: serverData.content,
        });
    }

    onBlueprintAdded(blueprintData: ServerElement) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.name,
            content: blueprintData.content,
        });
    }

    onChhangeFirst() {
        this.serverElements[0].name = 'Changed';
    }

    onDestroyFirst() {
        this.serverElements.splice(0, 1);
    }
}
