import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector:'my-app',
    templateUrl: 'app/app-component.html',
})

export class AppComponent implements OnInit{
    titulo:string = 'Lista de Heroes';

     public roleUser: string = 'Admin';
    constructor(public location: Location ,private router: Router){}

    ngOnInit():void{
        this.roleUer();
    }
    roleUer(): void{
        if(this.roleUser=='Admin'){

            this.location.go('/homePage');
        }
        if(this.roleUser==''){
            this.location.go('/loginPage');
             }
    }



}

