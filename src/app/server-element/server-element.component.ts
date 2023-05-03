import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { ServerElement } from '../types/server.element.type';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    @Input('srvElement') element: ServerElement;
    @Input() name: string;

    constructor() {
        console.log('constructor runs');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges runs');
        console.log(changes);
    }

    ngOnInit() {
        console.log('ngOnInit runs');
    }

    ngDoCheck(): void {
        console.log('ngDoCheck runs');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit runs');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked runs');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit runs');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked runs');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy runs');
    }
}
