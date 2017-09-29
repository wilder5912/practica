import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector : 'loginPage',
    templateUrl: './app/vista/login/register-component.html',
    styleUrls:[],
    providers: []
})


export class  RegisterPages implements OnInit{
    constructor(private route: Router){

    }
    ngOnInit(): void{

    }

}