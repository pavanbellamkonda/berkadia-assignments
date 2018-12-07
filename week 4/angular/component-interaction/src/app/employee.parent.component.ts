import { Component } from '@angular/core';
 
@Component({
    selector:'eparent',
    template:`
    <div>
        <h2 style="color:grey"> Parent Component </h2>
        <p *ngIf = "childVal">{{childVal}}</p>
        <table border="1px">
            <tr *ngFor = "let e of employees">
                <td>
                    {{e}}
                </td>
                <td>
                    <input type="button" value="Send to Child" (click) = "setName(e)"/>
                </td>
            </tr>
        </table>
    </div>
    <echild [name] = "Name" (toParent)="getOutput($event)"></echild>
    `
 })

export class EmpParent {
    employees = ['pavan', 'sravan', 'karan']
    Name:string;
    childVal:string;

    setName(e:string){
        this.Name = e;
    }

    getOutput(selected:string){
        if(selected)
            this.childVal = "Value from child is: " + selected;
    }



}