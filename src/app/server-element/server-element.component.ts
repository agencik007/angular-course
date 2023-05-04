import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
    ContentChild,
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
    @ViewChild('heading', { static: true }) header: ElementRef;
    @ContentChild('paragraph', { static: true }) paragraph: ElementRef;

    constructor() {
        console.log('constructor runs');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges runs');
        console.log(changes);
    }

    ngOnInit() {
        console.log('ngOnInit runs');
        console.log(
            'TextContent is not available before initialization ngAfterViewInit' +
                this.header.nativeElement.textContent
        );
        console.log(
            'Parapgrap is not available before initialization ngAfterContentInit' +
                this.paragraph.nativeElement.textContent
        );
    }

    ngDoCheck(): void {
        console.log('ngDoCheck runs');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit runs');
        console.log(
            'Paragraph is now available: ' +
                this.paragraph.nativeElement.textContent
        );
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked runs');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit runs');
        console.log(
            'TextContent is now available: ' +
                this.header.nativeElement.textContent
        );
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked runs');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy runs');
    }
}
