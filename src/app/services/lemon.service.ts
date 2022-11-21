import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LemonService {
  lemonQuote = `All right, I've been thinking, when life gives you lemons, don't make lemonade! Make life take the lemons back! Get mad! I don't want your damn lemons! What am I supposed to do with these? Demand to see life's manager!
  Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am? I'm the man whose gonna burn your house down - with the lemons!`;

  constructor() {}

  getFullQuote(): Observable<string> {
    return of(this.lemonQuote);
  }

  getRandomWordFromQuote(): Observable<string> {
    const words = this.lemonQuote.split(' ');
    const randomIndex = Math.floor(Math.random() * words.length);
    return of(words[randomIndex]);
  }
}
