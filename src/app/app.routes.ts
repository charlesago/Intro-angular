import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AutrePagreComponent} from "./autre-pagre/autre-pagre.component";
import {JokeComponent} from "./joke/joke.component";
import {JokesPageComponent} from "./jokes-page/jokes-page.component";
import {FruitDetailsComponent} from "./fruit-details/fruit-details.component";

export const routes: Routes = [

  {
    path:'home', component : HomeComponent
  },
  {
    path:'autre', component : AutrePagreComponent
  },
  {
    path:'joke', component : JokesPageComponent
  },
  {
    path:'fruit/:id', component : FruitDetailsComponent
  }
];
