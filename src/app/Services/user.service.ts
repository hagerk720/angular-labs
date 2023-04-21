import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly myClient:HttpClient) { }
  private readonly Base_URL = "http://localhost:3000/users";

  public getUsers(){
    return this.myClient.get(this.Base_URL);
  }
  public getUserById(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }

  public AddUser(newUser:any){
    return this.myClient.post(this.Base_URL,newUser);
  }
  public editUser(editedUser:any , id:any){
    return this.myClient.put(this.Base_URL+"/"+id,editedUser);
  }
  public DeleteUser(id:any){
    return this.myClient.delete(this.Base_URL+"/"+id);
  }

}
