
class Utilizator{
    nume;
    email;
    varsta;
    static nr_piciore = 2;
    constructor(n, e, v){
        this.nume = n;
        this.email = e;
        this.varsta = v;

    }
    salut(){
        console.log(`Salut, numele meu este ${this.nume} si am ${this.varsta} ani`);
        console.log('Salut, numele meu este '+this.nume+' si am '+this.varsta+' ani');
        
    }

    static merge(nr_pasi){
        console.log(` Toti utilizatori au mers azi ${nr_pasi} cu cele ${Utilizator.nr_piciore} picioare`)
    }
    
}



//let user = new Utilizator('Ion', 'ion@ion.com', 23);
//let user2 = new Utilizator('Dan', 'dan@dan.ro', 22);
//console.log(user);
//console.log(user2);
// user.varsta = 32;
// console.log(user);
//user.salut();
Utilizator.merge(8000);
Utilizator.nr_piciore= 3;
Utilizator.merge(3000);
//user2.salut();

