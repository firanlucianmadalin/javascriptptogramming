import {Product} from './Product.js';
class Book extends Product {
   author;
   constructor(name, price, percent, author){
       super(name. price);
       this.author = author;
   }
}
export {Book};