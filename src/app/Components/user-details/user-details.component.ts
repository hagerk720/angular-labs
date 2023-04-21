import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit  {
  ID:any ; 
  user:any ; 
  constructor(myRoute:ActivatedRoute , public myService:UserService ){
    this.ID = myRoute.snapshot.params["id"];
    
  }
  ngOnInit(): void {
    this.myService.getUserById(this.ID).subscribe({
      next: (data) => {
        this.user = data;
      }
    })
  }

}
