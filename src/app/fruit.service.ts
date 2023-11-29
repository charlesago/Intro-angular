import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor() { }

  tableauFruits = [
    {
      id: 2,
      name: "banane",
      couleur: "jaune"
    },
    {
      id:3,
      name:"pomme",
      couleur:"rouge"
    }
  ]

  getFruits() :Fruit[]
  {
    return this.tableauFruits
  }

  getFruitById(id: number){
    return this.tableauFruits.find((fruit:Fruit)=>fruit.id == id)!
  }
}
