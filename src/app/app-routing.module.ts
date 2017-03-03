import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }			from './app.component';
import { LoginComponent }		from './login.component';
import { DashboardComponent }	from './dashboard.component';

const routes: Routes = [
	{	path: '', redirectTo: '/login', pathMatch: 'full' },
	{	path: 'login', component: LoginComponent },
	{	path: 'dashboard', component: DashboardComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
