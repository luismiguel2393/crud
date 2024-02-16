import { Routes } from '@angular/router';
import {DefaultComponent} from './shared/layouts/default/default.component';
import {LoginComponent} from './pages/login/login.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { IndexComponent } from './pages/index/index.component';
import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    canActivate:  [guestGuard], //[AuthGuardService]
    children:[{path:'',component:LoginComponent}],
  },
  {
    path:'',
    component:MasterComponent,
    canActivate:[authGuard],
    children:[{path:'inicio',component:IndexComponent}],
  },
];
