import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  @Input("DataFromLogin") DataFromLogin :any ;
  Students:{name:string, age:string}[] = [];

  getData(data:any){
    if(+data.age >=20 && +data.age <= 40 && data.name.length > 3 ) 
    this.Students.push(data);
    this.DataFromLogin = this.Students ;    
  }

}
