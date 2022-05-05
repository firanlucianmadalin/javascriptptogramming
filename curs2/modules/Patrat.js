class Patrat {
    latura;
    constructor(latura){
        this.latura = latura;
    }
    calculeazaArie(){
        return this.latura ** 2;
    }
    calculeazaPerimetru(){
        return this.latura * 4;
    }
}
function rezolvaPatrat(patrat){
    console.log(`Aria patratului este:`, patrat.calculeazaArie());
    console.log(`Perimetrul patratului este:`, patrat.calculeazaPerimetru());
}
function deseneazaPatrat(patrat){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, patrat.latura, patrat.latura);
    ctx.stroke();
}
//export default rezolvaPatrat;
export {rezolvaPatrat as default,Patrat} 
// export {rezolvaPatrat as default, deseneazaPatrat, Patrat as MyPatrat} 