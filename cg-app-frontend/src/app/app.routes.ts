import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: '**', redirectTo: 'auth/login' }
];
