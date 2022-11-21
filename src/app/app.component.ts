import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  `,
  styles: [],
})
export class AppComponent {
  title = 'mutable';
  titleCopy = this.title;

  ngOnInit() {
    // every 2 seconds, print the title and titleCopy
    setInterval(() => {
      console.log(`title: ${this.title} && titleCopy: ${this.titleCopy}`);
    }, 2000);

    // after 5 seconds, change the title
    setTimeout(() => {
      this.title = 'immutable';
    }
    , 5000);

    // after 10 seconds, change the title again
    setTimeout(() => {
      this.title = 'mutable again';
    }
    , 10000);
  }
}
