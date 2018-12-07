import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    'selector':'echild',
    'template':`
    <h2 style="color:grey"> Child Component </h2>
    <p *ngIf = "name">Selected Employee name is: {{name}}</p>
    <br>
    <button (click)="notifyParent(name)">Send value to Parent</button>
    `
})

export class EmpChild {
    @Input() name:string

    @Output() toParent = new EventEmitter<string>();

    notifyParent(selected:string){
        this.toParent.emit(selected);
    }
}