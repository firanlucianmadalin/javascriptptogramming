class User{
    id;
    nume;
    email;
    varsta;
    constructor(id,nume,email, varsa){
        //setam proprietatile
        this.id = id;
        this.nume = nume;
        this.emnail = email;
        this.varsta = varsta;
    }
    mananca (claorii){
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
export {User}
