import { Component,NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MarketComponent } from './components/market/market.component';
import { ShiftComponent } from './components/shift/shift.component';
import { RegisterComponent } from './components/register/register.component';


const routes :Routes=[
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent, pathMatch: "full"},
    {path:'register', component:RegisterComponent},
    {path:'market', component:MarketComponent},
    {path:'shift', component:ShiftComponent},
    {path:'', component:HomeComponent},
    {path:'**', component:HomeComponent},
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
