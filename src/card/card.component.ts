import { Component, input, Signal } from '@angular/core';
import { ICardInfo } from '../interfaces/ICardInfo';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardInfo = input<ICardInfo | undefined>();
}
