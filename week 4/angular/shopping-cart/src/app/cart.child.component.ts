import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Item } from './item';

@Component({
    'selector':'echild',
    'template':`
    <h2 style="color:grey"> Total: {{total}}</h2>
    <div *ngFor = "let i of items">
        <p *ngIf = "i.quantity">{{i.name}} {{i.quantity}}x{{i.price}}</p>
    </div>
    `
})

export class EmpChild {
    @Input() items:Item;
    @Input() total:number;
}