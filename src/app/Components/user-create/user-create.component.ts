import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
    constructor(private myService: UserService , private myRouter :Router){  
    }

    createForm = new FormGroup({
      name:new FormControl(null,[Validators.required, Validators.minLength(3)]),
      email:new FormControl(null,[ Validators.email]),
      age:new FormControl(null,[Validators.min(20),Validators.max(40)]),
      phone:new FormControl(null,[Validators.minLength(11),Validators.maxLength(11)])
    })
    public addUser(name:any,age:any, email:any, phone:any){
      if(this.createForm.valid){
            let newUser = {name, age, email, phone};
            this.myService.AddUser(newUser).subscribe(
              {
                next:()=>{
                  this.myRouter.navigate([""]);          
                }
              }
            );
          }
      else{
        alert("invalid inputs");
        console.log(this.createForm);
        
      }
   
    }
}
