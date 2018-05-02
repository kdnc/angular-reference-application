import {Component} from '@angular/core';

@Component({
  selector: 'kdnc-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent {
  currentDate = new Date();
  title = `Flight Security Restrictions to Include  Insults, Mean Faces`;
  author = 'Jake';
}
