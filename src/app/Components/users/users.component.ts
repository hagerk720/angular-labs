import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any; 
  constructor(public myService:UserService){}
  ngOnInit(): void {
    this.myService.getUsers().subscribe(
      {
        next:(data)=> {
            console.log(data);
            this.users = data ;
        },
        error:(err)=>{}
      }
    )
  }
  public deleteUser(id:any){
    this.myService.DeleteUser(id).subscribe({
      next:()=>{
        this.ngOnInit();
      },
      error:()=>{

      }
    })
  }

}
