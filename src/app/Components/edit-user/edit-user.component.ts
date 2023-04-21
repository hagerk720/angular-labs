import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  ID:any ; 
  user: any ;
  editForm:any; 
  constructor(private route: ActivatedRoute , public myService:UserService ,private myRouter :Router){
    this.ID = this.route.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.getUserById(this.ID).subscribe({
      next: (data)=>{
        this.user = data ; 
        this.editForm = new FormGroup({
          name:new FormControl(this.user.name,[Validators.required, Validators.minLength(3)]),
          email:new FormControl(this.user.email,[ Validators.email]),
          age:new FormControl(this.user.age,[Validators.min(20),Validators.max(40)]),
          phone:new FormControl(this.user.phone,[Validators.minLength(11),Validators.maxLength(11)])
        })
      },
      error:(err)=>{

      }
    });   
  }

  public editUser(name:any,age:any, email:any, phone:any){
    let editedUser = {name, age, email, phone};
    this.myService.editUser(editedUser, this.ID).subscribe({
      next: (data)=>{
        this.myRouter.navigate(['']);
      },
      error: (err)=>{

      }
    });
  }
  
}
