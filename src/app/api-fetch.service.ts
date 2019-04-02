import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {

  private url: string = 'http://makeup-api.herokuapp.com/api/v1/products.json';
  private MOCK: any = [
    {
      id: 7,
      brand: 'lorem ipsum brand',
      name: 'generic makeup',
      price: '7.0',
      price_sign: '$',
      currency: 'CAD',
      image_link: 'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769',
      product_link: 'https://colourpop.com/collections/lippie-pencil',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum.',
      rating: null,
      category: 'pencil',
      product_type: 'lip_liner',
      tag_list: ['Vegan','cruelty free'],
      created_at: '2018-07-08T23:45:08.056Z',
      updated_at: '2018-07-09T00:53:23.301Z'
    },
    {
      id: 7,
      brand: 'lorem ipsum brand',
      name: 'generic makeup',
      price: '7.0',
      price_sign: '$',
      currency: 'CAD',
      image_link: 'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769',
      product_link: 'https://colourpop.com/collections/lippie-pencil',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum.',
      rating: null,
      category: 'pencil',
      product_type: 'lip_liner',
      tag_list: ['Vegan','cruelty free'],
      created_at: '2018-07-08T23:45:08.056Z',
      updated_at: '2018-07-09T00:53:23.301Z'
    },
    {
      id: 7,
      brand: 'lorem ipsum brand',
      name: 'generic makeup',
      price: '7.0',
      price_sign: '$',
      currency: 'CAD',
      image_link: 'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769',
      product_link: 'https://colourpop.com/collections/lippie-pencil',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum.',
      rating: null,
      category: 'pencil',
      product_type: 'lip_liner',
      tag_list: ['Vegan','cruelty free'],
      created_at: '2018-07-08T23:45:08.056Z',
      updated_at: '2018-07-09T00:53:23.301Z'
    },
    {
      id: 7,
      brand: 'lorem ipsum brand',
      name: 'generic makeup',
      price: '7.0',
      price_sign: '$',
      currency: 'CAD',
      image_link: 'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769',
      product_link: 'https://colourpop.com/collections/lippie-pencil',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum.',
      rating: null,
      category: 'pencil',
      product_type: 'lip_liner',
      tag_list: ['Vegan','cruelty free'],
      created_at: '2018-07-08T23:45:08.056Z',
      updated_at: '2018-07-09T00:53:23.301Z'
    },
    {
      id: 7,
      brand: 'lorem ipsum brand',
      name: 'generic makeup',
      price: '7.0',
      price_sign: '$',
      currency: 'CAD',
      image_link: 'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769',
      product_link: 'https://colourpop.com/collections/lippie-pencil',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum.',
      rating: null,
      category: 'pencil',
      product_type: 'lip_liner',
      tag_list: ['Vegan','cruelty free'],
      created_at: '2018-07-08T23:45:08.056Z',
      updated_at: '2018-07-09T00:53:23.301Z'
    },
    {
      id: 7,
      brand: 'lorem ipsum brand',
      name: 'generic makeup',
      price: '7.0',
      price_sign: '$',
      currency: 'CAD',
      image_link: 'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769',
      product_link: 'https://colourpop.com/collections/lippie-pencil',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum.',
      rating: null,
      category: 'pencil',
      product_type: 'lip_liner',
      tag_list: ['Vegan','cruelty free'],
      created_at: '2018-07-08T23:45:08.056Z',
      updated_at: '2018-07-09T00:53:23.301Z'
    }
  ];

  constructor(private http: HttpClient) {
    
  }

  fetchAll() {
    return this.MOCK;
  }

  fetchBrand(str: string) {
    return this.MOCK;
  }

  fetchCategory(str: string) {
    return this.MOCK;
  }

  fetchBrandAndCategory(brand: string, category: string) {
    return this.MOCK;
  }

  private get(url: string, cb: Function) {
    let tmp: any;
    this.http.get(url).subscribe(
      function(res) {
        tmp = res;
        if(cb != undefined) {
          cb(res);
        }
      }
    );
    return tmp;
  }
}
