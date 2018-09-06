import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule,
	MatIconModule, MatInputModule, MatListModule,
	MatMenuModule, MatPaginatorModule, MatSidenavModule, MatSortModule,
	MatTableModule,
	MatTabsModule, MatToolbarModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		MatTabsModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatIconModule,
		MatTableModule,
		MatPaginatorModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule,
	],
	declarations: [
		AppComponent,
		MainNavComponent,
		MainDashboardComponent,
		MainTableComponent,
		HomeComponent,
		LoginComponent
	],
	providers: [
		LoginService,
		LoginGuard,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
