import { DatePipe } from "@angular/common";
import { Component, Input  } from "@angular/core";
import { laboratorio } from "./laboratorios.model";



@Component({
    selector:"app-laboratorios",
    templateUrl:"./laboratorios.component.html",
    styleUrls: ['./laboratorio.component.css']

})


export class laboratoriosComponent{
    employeeArray: laboratorio [] = [
        {id: 1, evento: 'USA',profesor:'Jilafares',laboratorio:'NUmero 1'},
        
      ];
      selectedEmployee: laboratorio  = {id:0, evento: '',profesor:'',laboratorio:'',};
    
      openForEdit(employee: laboratorio ): void 
      {
        localStorage.setItem ("laboratorio",JSON.stringify(employee));
        this.selectedEmployee = employee;
       

      }
 
      addOrEdit(): void
      {
        if(this.selectedEmployee.id === 0) // INSERT
        {
          this.selectedEmployee.id = this.employeeArray.length + 1;
          this.employeeArray.push(this.selectedEmployee);
          
        }
        this.selectedEmployee = {id:0, evento: '',profesor:'',laboratorio:''};
    
      }
      delete(): void 
      {
        if(confirm('Are you sure you want to delete it?'))
        {
          this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
          this.selectedEmployee = {id:0, evento: '',profesor:'',laboratorio:''};
        }
      }
}