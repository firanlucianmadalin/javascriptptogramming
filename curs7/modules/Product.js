class Product {
    static sale = 0;
    name;
    price;
    percent;
    constructor(name, price, percent=10){
        this.name = name;
        if(Product.sale == 1){
           this.price = price -(price * percent)/100;
        }
         else{
            this.price = price;
         }   
        
        this.percent = percent;
        }
        static orderByPrice(a, b){
            return a.price -b.price;
        }
}

export {Product};