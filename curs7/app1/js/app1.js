import {Product} from '../../modules/Product.js';
import {Book} from '../../modules./Book.js';
import { Basket } from '../../modules/Basket.js';

console.log(typeof Product)
const bread = new Product ('bread', 8);
console.log(typeof bread);
const water = new Product ('water', 3,25);
const faust = new Book ('faust', 12.5,10, 'Goethe')

const products = [
    new Product("Product 1",22),
    new Product("Product 2",33),
    new Product("Product 3",18),
    new Product("Product 4",101),
    new Product("Product 5",39) 
];
products.sort(Product.orderByPrice);
confirm.log(products);
const cos = new Basket();

cos.addProduct(2, bread);
cos.addProduct(3, bread);
cos.addProduct(3, water);
cos.addProduct(1, faust);

Product.sale=1;
cos.printShoppingInfo();