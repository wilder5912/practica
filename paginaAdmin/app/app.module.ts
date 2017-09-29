import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {HomePages} from "./controller/home/home.component";
import {LoginPages} from "./controller/login/login.component";
import {RegisterPages} from "./controller/login/register.component";
import {HttpModule} from "@angular/http";
import {routing} from "./services/route";

@NgModule({
    imports:      [ BrowserModule,routing ,FormsModule,HttpModule],
    declarations: [ AppComponent,HomePages,LoginPages,RegisterPages ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {


}

