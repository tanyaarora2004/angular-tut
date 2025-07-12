import { Routes } from '@angular/router';
import { About } from './about/about';
import { ContactUs } from './contact-us/contact-us';
import { Login } from './login/login';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Prof } from './prof/prof';

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
    {
        path:'prof',component:Prof,data:{name:'Tanya'}
    },
    {
        path:'**',component:PageNotFound
    }
];
