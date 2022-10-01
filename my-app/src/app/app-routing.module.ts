import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: "welcome", component: WelcomeComponent},
    {path: "home", component: HomeComponent},
    {path: "**", redirectTo: "welcome"}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
