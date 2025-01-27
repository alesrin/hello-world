import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  items: any[] = [
    {card_name: 'Card 1',
      card_description: 'This is a description for card 1', card_subtitle: 'This is a subtitle for card 1',
      imageUrl: 'assets/img/favicon.png'
    },
    {card_name: 'Card 1',
      card_description: 'This is a description for card 1', card_subtitle: 'This is a subtitle for card 1',
      imageUrl: 'assets/img/favicon.png'
    },
    {card_name: 'Card 1',
      card_description: 'This is a description for card 1', card_subtitle: 'This is a subtitle for card 1',
      imageUrl: 'assets/img/favicon.png'
    },

  ]
  constructor() {}

}
