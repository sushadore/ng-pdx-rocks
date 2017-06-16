import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
