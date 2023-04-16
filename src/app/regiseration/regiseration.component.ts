import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-regiseration',
  templateUrl: './regiseration.component.html',
  styleUrls: ['./regiseration.component.css']
})
export class RegiserationComponent {

  usrName="";
  usrAge="";
  @Output('myEvent') myEvent = new EventEmitter();
  Add(){
    let newStudent = {name:this.usrName, age:this.usrAge};

    this.usrAge = "";
    this.usrName = "";
    this.myEvent.emit(newStudent);
  } 
    
}
