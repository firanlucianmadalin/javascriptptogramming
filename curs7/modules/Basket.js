import {Product} from './Product.js';
import {Book} from './Book.js';
class Basket {
   constructor() {
       this.products = [];
   }
   addProduct(amount, product){
       this.products.push(...Array(amount).fill(product));
   }
   calcTotal() {
       return this.products
       .map(product => product.price)
       .reduce((a, b) => a + b, 0);
   }
   printShoppingInfo() {
       console.log('Total:' + this.calcTotal());
   }
}
export {Basket};