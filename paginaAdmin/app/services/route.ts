import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePages} from '../controller/home/home.component';
import {LoginPages} from '../controller/login/login.component';


console.log("holasasd");
const rutas: Routes =[
    {
        path: 'homePage',
        component: HomePages
    },
    {
        path: 'loginPage',
        component: LoginPages
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);