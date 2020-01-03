import { FetchDataService } from './fetch-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectNavigationComponent } from './project-navigation/project-navigation.component';
import { ItemLogComponent } from './item-log/item-log.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuNavigationComponent,
    LoginFormComponent,
    ProjectFormComponent,
    ProjectNavigationComponent,
    ItemLogComponent,
    DeleteConfirmComponent,
    ProjectOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
