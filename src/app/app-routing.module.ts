import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { RobemexProjectsComponent } from './components/companies/robemex/robemex-projects.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'companies', component:CompaniesComponent},
  {path:'robemex-projects', component:RobemexProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
