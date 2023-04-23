import { Component } from '@angular/core';
import { ServerElement } from '../app/server-element/server-element.component';

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

    onBlueprintAdded(bleuprintData: ServerElement) {
        this.serverElements.push({
            type: 'blueprint',
            name: bleuprintData.name,
            content: bleuprintData.content,
        });
    }
}
