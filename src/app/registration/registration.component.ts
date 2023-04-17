import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    name:new FormControl(null,[ Validators.min(3)]),
    email:new FormControl(null,[ Validators.email]),
    age:new FormControl(null,[Validators.min(20),Validators.max(40)])
  })

  Add(){
    if(this.registrationForm.valid){
      alert("added successfully");
    }
    else{
      alert("invalid inputs");
    }
  }
  get AgeValid(){
    return this.registrationForm.controls["age"].valid;
  }
  get NameValid(){
    return this.registrationForm.controls["name"].valid;
  }
  get EmailValid(){
    return this.registrationForm.controls["email"].valid;
  }
  
}
