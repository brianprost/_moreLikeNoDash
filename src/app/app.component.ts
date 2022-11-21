import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LemonService } from './services/lemon.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="text-content">
      <h1>title: {{ title | async }}</h1>
      <h1>titleCopy: {{ titleCopy | async }}</h1>
      <button (click)="onButtonClick()">Print titleCopy to console</button>
    </div>
  `,
  styles: [
    `
      .text-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      h1 {
        text-align: center;
      }

      button {
        display: block;
        margin: 0 auto;
      }
    `,
  ],
})
export class AppComponent {
  title: Observable<string> = this.lemonService.getRandomWordFromQuote();
  titleCopy = this.title;

  constructor(private lemonService: LemonService) {}

  ngOnInit() {
    // every 5 seconds, change the title to a new random word from the quote service
    setInterval(() => {
      this.title = this.lemonService.getRandomWordFromQuote();
    }, 1000);
  }

  onButtonClick(): void {
    // print the current value of titleCopy to the console
    this.titleCopy.subscribe((value) => console.log(value));
  }
}
