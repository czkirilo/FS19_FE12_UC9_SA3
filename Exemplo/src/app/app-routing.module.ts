import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path:"menu", component: MenuComponent},
  {path:"banana", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
