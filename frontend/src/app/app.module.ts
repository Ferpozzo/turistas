
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/user-components/register/register.component';
import { MatIconModule } from '@angular/material/icon';
import { UpdateComponent } from './components/user-components/update/update.component';
import { ProfileComponent } from './components/user-components/profile/profile.component';
import { NewLocaleComponent } from './Components/locales/new-locale/new-locale.component';
import { UpdateLocaleComponent } from './Components/locales/update-locale/update-locale.component';
import { DeleteLocaleComponent } from './Components/locales/delete-locale/delete-locale.component';
import { ViewLocaleComponent } from './Components/locales/view-locale/view-locale.component';
import { DetailLocaleComponent } from './Components/locales/detail-locale/detail-locale.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    ProfileComponent,
    NewLocaleComponent,
    UpdateLocaleComponent,
    DeleteLocaleComponent,
    ViewLocaleComponent,
    DetailLocaleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
