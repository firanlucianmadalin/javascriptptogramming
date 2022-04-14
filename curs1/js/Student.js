function student(id,nume,varsta,nota1,nota2){
    this.id=id;
    this.nume=nume;
    this.varsta=varsta;
    this.nota1=nota1;
    this.nota2=nota2;

} 
student.prototype.salut = function(){
    console.log.prototype(`Buna ziua numele meu este ${this.nume}`);
}