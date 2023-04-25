import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { ServerElement } from '../types/server.element.type';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<ServerElement>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<ServerElement>();
    // newServerName = '';
    // newServerContent = '';
    @ViewChild('serverContentInput') serverContentInput: ElementRef;

    constructor() {}

    ngOnInit() {}

    onAddServer(nameInput: HTMLInputElement) {
        // console.log(this.serverContentInput);
        this.serverCreated.emit({
            name: nameInput.value,
            content: this.serverContentInput.nativeElement.value,
        });
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            name: nameInput.value,
            content: this.serverContentInput.nativeElement.value,
        });
    }
}
