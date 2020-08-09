import { Item } from './item.model';

export class ItemFavourite {
  favourite: boolean;
  title: string;
  description: string;
  price: number;
  email: string;
  image: string;

  constructor(item: Item) {
    this.title = item.title;
    this.description = item.description;
    this.price = +item.price;
    this.email = item.email;
    this.image = item.image;
    this.favourite = false;
  }
}
