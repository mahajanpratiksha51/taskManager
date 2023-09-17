import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'task',component:TaskComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'',redirectTo:'task',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
