import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts() {
    return [
      { id: 1, name: 'Bananas' },
      { id: 2, name: 'Pozole' },
      { id: 3, name: 'Papitas' },
    ];
  }
}
