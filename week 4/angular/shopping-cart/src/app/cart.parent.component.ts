import { Component } from '@angular/core';
import { Item } from'./item';
 
@Component({
    selector:'eparent',
    template:`
    <div>
        <h2 style="color:grey"> Items in cart: </h2>
        <table border="0px" align="center">
            <tr *ngFor = "let i of items; let  in = index">
                <td>
                    {{i.name}} Price: {{i.price}} Quantity: {{i.quantity}}
                </td>
                <td>
                    <input type="button" value="Add" (click) = "add(in)"/>
                </td>
                <td>
                    <input type="button" value="Delete" *ngIf = "i.quantity" (click) = "del(in)"/>
                </td>
            </tr>
        </table>
    </div>
    <echild [items] = "items" [total] = "total" (toParent)="getOutput($event)"></echild>
    `
 })

export class EmpParent {
    items:Array<Item>;
    total = 0;
    
    constructor(){
        this.items = [new Item("Mobile", 10000, 0), new Item("Laptop", 100000, 0), new Item("Tablet", 20000, 0)]
    }

    add(i:number){
        this.items[i].quantity += 1;
        this.totalSum()
    }

    del(i:number){
        if(this.items[i].quantity > 0){
            this.items[i].quantity -= 1;
        }
        this.totalSum()
    }

    totalSum(){
        this.total = 0
        for(var i=0; i<3; i++){
            this.total = this.total + this.items[i].quantity * this.items[i].price
        }
    }
}