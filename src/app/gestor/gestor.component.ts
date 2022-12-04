import { Component, Input } from '@angular/core';
import { laboratorio } from '../laboratorio/laboratorios.model';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent {
  @Input() ListaReserva:laboratorio;
  @Input() indice:number;
  constructor(){
  }
ngOnInit():void{
}
laboratorios:laboratorio[]=[
  
];
employeeArray: laboratorio [] = [
  {id: 1, name: 'Ryan', evento: 'USA',profesor:'Jilafares',laboratorio:'NUmero 1'},

];

selectedEmployee: laboratorio  = {id:0, name: '', evento: '',profesor:'',laboratorio:'',};

openForEdit(employee: laboratorio ): void 
{
  this.selectedEmployee = employee;
}

addOrEdit(): void
{
  if(this.selectedEmployee.id === 0) // INSERT
  {
    this.selectedEmployee.id = this.employeeArray.length + 1;
    this.employeeArray.push(this.selectedEmployee);
  }
  this.selectedEmployee = {id:0, name: '', evento: '',profesor:'',laboratorio:''};
}

delete(): void 
{
  if(confirm('Are you sure you want to delete it?'))
  {
    this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
    this.selectedEmployee = {id:0, name: '', evento: '',profesor:'',laboratorio:''};
  }
}
}

