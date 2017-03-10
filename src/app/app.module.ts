import { NgModule }         	from '@angular/core';
import { BrowserModule }    	from '@angular/platform-browser';
import { RouterModule }     	from '@angular/router';

import { AppComponent }  		from './app.component';
import { LoginComponent } 		from './login.component';
import { DashboardComponent } 	from './dashboard.component';
import { ModuleComponent }		from './module.component';

import { AppRoutingModule } 	from './app-routing.module';

@NgModule({
    imports:      [
    	BrowserModule,
    	AppRoutingModule
	],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        ModuleComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
