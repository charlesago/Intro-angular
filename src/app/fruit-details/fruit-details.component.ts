import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Fruit} from "../fruit";
import {FruitService} from "../fruit.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fruit-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruit-details.component.html',
  styleUrl: './fruit-details.component.css'
})
export class FruitDetailsComponent {

  fruit : Fruit


  fruitService : FruitService = inject(FruitService)
  route : ActivatedRoute = inject(ActivatedRoute)
  constructor() {
  let id = Number(this.route.snapshot.params['id'])
    this.fruit = this.fruitService.getFruitById(id)
  }
}
