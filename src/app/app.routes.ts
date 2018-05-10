import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }

];

export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: false });
