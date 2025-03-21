import { Component, Input } from '@angular/core';
import { Cinemas } from 'src/app/shared/models/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() item?:Cinemas ;

}
