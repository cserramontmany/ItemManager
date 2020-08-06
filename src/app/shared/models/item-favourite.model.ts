import { Item } from './item.model';

export class ItemFavourite extends Item {
  favourite: boolean;

  constructor(item: Item) {
    super();
    this.title = item.title;
    this.description = item.description;
    this.price = item.price;
    this.email = item.email;
    this.image = item.image;
    this.favourite = false;
  }
}
