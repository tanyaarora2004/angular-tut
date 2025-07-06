import { Routes } from '@angular/router';
import { About } from './about/about';
import { ContactUs } from './contact-us/contact-us';
import { Login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path:'',component:Home
    },  
    {
        path:'about',component:About
    },
    {
        path:'contact-us',component:ContactUs
    },
    {
        path:'login',component:Login
    },
];
