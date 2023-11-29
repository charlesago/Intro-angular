import { Injectable } from '@angular/core';
import {Joke} from "./joke";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  url : string = "https://api.chucknorris.io/jokes/random"


  async getFivesJokes()
  {
    let jokes: Joke[] = []

    for ( let i=0; i<5; i++){

      const  jokeJson = await fetch(this.url)
      const joke = await jokeJson.json()

      jokes.push(joke)
      console.log(joke)

    }
    return jokes
  }

  constructor() {}

}
