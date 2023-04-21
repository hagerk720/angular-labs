import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { ErrorComponent } from './Components/error/error.component';
import { UserCreateComponent } from './Components/user-create/user-create.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:'' , component:UsersComponent},
  {path:'users/:id' , component:UserDetailsComponent},
  {path:'users/:id/edit' , component:EditUserComponent},
  {path:'create' , component:UserCreateComponent}, 
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
