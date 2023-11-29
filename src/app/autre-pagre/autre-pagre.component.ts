import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FruitService} from "../fruit.service";
import {FruitComponent} from "../fruit/fruit.component";
import {Fruit} from "../fruit";

@Component({
  selector: 'app-autre-pagre',
  standalone: true,
  imports: [CommonModule, FruitComponent],
  templateUrl: './autre-pagre.component.html',
  styleUrl: './autre-pagre.component.css'
})
export class AutrePagreComponent {


  fruitsService : FruitService = inject(FruitService)

  fruits: Fruit[] = this.fruitsService.getFruits()

}
