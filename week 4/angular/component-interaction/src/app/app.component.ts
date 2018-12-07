import { Component, OnInit } from '@angular/core';
import { Employee } from'./employee';
import {EmpParent} from './employee.parent.component';
import {EmpChild} from './employee.child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  MyEmp : Employee;
  
  ngOnInit(){
    this.setEmployee()
  }

  setEmployee(){
    this.MyEmp = new Employee(100, 'Pavan')
  }

}
