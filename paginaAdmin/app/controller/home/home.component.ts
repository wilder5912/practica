import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector : 'homePage',
    templateUrl: './app/vista/home/home-component.html',
    styleUrls:[],
    providers: []
})


export class  HomePages implements OnInit{
    constructor(private route: Router){

    }
    ngOnInit(): void{

    }

}