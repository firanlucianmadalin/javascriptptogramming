class Carte{
    titlu;
    autor;
    constructor(titlu, autor){
        this.titlu = titlu;
        this.auto = autor;
    }
    toString(){
        console.log(`Cartea se numeste ${this.titlu} si este scrisa de ${this.autor}`);
    }
    deschidCartea(){
        console.log('Am deschis cartea la pagina 43');
    }
}

class Manual extends Carte{
    nrbucati;
    constructor(titlu, autor, nrbuc){
        super(titlu, autor)
        this.nrbucati = nrbuc;
    }

    getComanda(){
        super.toString();
        console.log(`Cartea ${this.titlu} este comandata in ${this.nrbucati}`);
    }
    toString(){
        super.toString();
        console.log(`Sunt in clasa copil si apelez metoda din clasa parinte`);
    }
}
export {Carte, Manual}