
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

// import { PostCreateComponent } from '../posts/post-create/post-create.component';
// import { PostListComponent } from '../posts/post-list/post-list.component';

const routes: Routes = [
  { path: 'register', component: UserCreateComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: UserLoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }


