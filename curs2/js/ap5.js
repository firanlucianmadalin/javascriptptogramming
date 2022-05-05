//importam modulele
import {Carte, Manual} from '../modules/Carte.js';

let carte = new Carte('Poezii', 'George Bacovia');
console.log(carte);
carte.toString();
caret.deschidCartea();

caret.titlu = 'Ion';

let manual = new Manual('Limba Romana', 'Necunoscut');
console.log(manual);
manual.deschidCartea();
manual.toString();
manual.nrbucati=27;
manual.getComanda();