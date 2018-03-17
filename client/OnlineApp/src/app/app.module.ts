import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponentComponent, SellingSlotsComponentComponent } from './components';
import { SmartContractService } from './services/smart-contract.service';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'slots', pathMatch: 'full' },
	{ path: 'slots', component: SellingSlotsComponentComponent },
	{ path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponentComponent,
		SellingSlotsComponentComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		AppComponent
	],
	providers: [SmartContractService],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
