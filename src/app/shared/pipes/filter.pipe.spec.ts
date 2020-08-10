// import { FilterPipe } from './filter.pipe';

// describe('FilterPipe', () => {
//   const pipe = new FilterPipe();
//   it('create an instance', () => {
//     expect(pipe).toBeTruthy();
//   });

// });


import { FilterPipe } from './filter.pipe';
import { ItemFavourite } from '../models/item-favourite.model';
import { Item } from '../models/item.model';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  let item_a = new ItemFavourite(new Item());
  item_a.title = 'Item A';
  item_a.description = 'ÀÁÂÃÄÅñŠšŸÿýŽž';
  item_a.price = 10;
  item_a.email = 'a.email@aaaaaa';


  let item_b = new ItemFavourite(new Item());
  item_b.title = 'item B';
  item_b.description = 'ÙÚÛÜùúûüÑ';
  item_b.price = 22;
  item_b.email = 'b.email@bbbbb';

  let item_c = new ItemFavourite(new Item());
  item_c.title = ' it c';
  item_c.description = 'ÈÉÊËèéêëðÇ';
  item_c.price = 30;
  item_c.email = 'c.email@cccc';
  
  const arr = [item_a,item_b,item_c]
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('various tests filtering on this 3 items  should all be true.', () => {
    expect(pipe.transform(arr, 'item')).not.toBe(undefined);
    expect(pipe.transform(arr, 'item').length).toBe(2);

    expect(pipe.transform(arr, 'it')).not.toBe(undefined);
    expect(pipe.transform(arr, 'it').length).toBe(3);

    expect(pipe.transform(arr, 'c')).not.toBe(undefined);
    expect(pipe.transform(arr, 'c').length).toBe(1);
  });
  
  it('stringNormalization() => should be passed.', () => {
    const str = 'aaaaaanssyyyzz'
    expect(pipe.stringNormalization(item_a.description)).toBe(str);

  });
});
