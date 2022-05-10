class Animal{
    #familie;
    #mancare;
    greutate;
    static nrPicioare = 2;
    static nrOchi =2;
    constructor(greutate){
        this.greutate = greutate;

    }
    
    get greutate(){
        return thid.greutate;
        
    }
    set greutate(gr){
        this.greutate = gr;
    }
    get familie(){
        return this.#familie; 
    }
    set familie(fam){
        this.#familie = fam;
    }
    get mancare(){
        return this.#mancare;
    }
    set mancare(mancare){
        this.#mancare = mancare;

    }
    mancare(calorii){
        this.greutate = this.greutate + calorii
        console.log(`Calorii consumate azi sunt ${calorii}`si greutatea actuala este ${this.greutate})
    }
    doarme(ore){
        console.log(`Animalul doarme ${ore pe zi}`)
    }
    comunica(mesaj){
        console.log(mesaj);
    }
    }
}