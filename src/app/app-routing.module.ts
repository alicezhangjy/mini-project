import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FileuploadComponent } from './fileupload/fileupload.component';


const routes: Routes = [
  { path: 'upload', component: FileuploadComponent },
  { path: 'users', component: DashboardComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'detail/:name', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }