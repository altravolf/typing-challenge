import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { min } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  typedText = '';
  letter = '';
  randomText = faker.lorem.sentence({ min: 8, max: 10 });

  onCheck(existedLetter: string, typedLetter: string) {
    if (!typedLetter) {
      return 'not-typed';
    }
    return existedLetter === typedLetter ? 'correct' : 'incorrect';
  }

  onClickPara() {
    this.randomText = faker.lorem.sentence({ min: 8, max: 10 });
    this.typedText = '';
  }
}
