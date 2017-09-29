import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector : 'loginPage',
    templateUrl: './app/vista/login/logincomponent.html',
    styleUrls:[],
    providers: []
})


export class  LoginPages implements OnInit{
    constructor(private route: Router){

    }
    ngOnInit(): void{

    }

}