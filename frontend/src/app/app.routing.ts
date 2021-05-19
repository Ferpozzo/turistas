import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteLocaleComponent } from './Components/locales/delete-locale/delete-locale.component';
import { NewLocaleComponent } from './Components/locales/new-locale/new-locale.component';
import { UpdateLocaleComponent } from './Components/locales/update-locale/update-locale.component';
import { ViewLocaleComponent } from './Components/locales/view-locale/view-locale.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/user-components/register/register.component';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];