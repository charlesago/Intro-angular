import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Joke} from "../joke";
import {MauricePipe} from "../maurice.pipe";

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule, MauricePipe],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

  @Input() joke!: Joke
  sl: number  = "When Chuck Norris hits it, he don't quit it until whatever it is dies.".length



  shorter() : boolean{
    return this.joke.value.length > this.sl

  }


}
