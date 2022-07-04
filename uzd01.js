'use strict';
// sukurti kintamuosius 'vardas', 'amzius', 'arVairuojuMasina', 'miestas', 'megstamiausiaSalis'
let vardas;
let amzius;
let arVairuojuMasina;
let miestas;
let megstamiausiaSalis;
// surasyti i juos reiksmes
vardas = 'James';
amzius = 33;
arVairuojuMasina = true;
miestas = 'London';
megstamiausiaSalis = 'Bahamas';

// atspausdinti reiksmes konsoleje
// string contcatination stringo sujungimas
console.log('Vardas: ' + vardas);
console.log('amzius: ' + amzius);
console.log('arVairuojuMasina: ' + arVairuojuMasina);
console.log('miestas: ' + miestas);
console.log('megstamiausiaSalis: ' + megstamiausiaSalis);

// sukurti 4 skaicius kintamuosius
// apskaiciuoti ju vidurki ir priskirti kintamajam avg
let n1 = 10;
let n2 = 20;
let n3 = 5;
let n4 = 10;

let sum = n1 + n2 + n3 + n4;
let avg = sum / 4;
let avg2 = (n1 + n2 + n3 + n4) / 4;
console.log('avg === ' + avg);
console.log('avg2 ===', avg2);

let pavarde = 'Bond';
// stringu sujungimas su kintamaisiais
let vardasIrPavarde = vardas + ' ' + pavarde + '!!!';
console.log('vardasIrPavarde ===', vardasIrPavarde);

vardas = 'Tadas';
pavarde = 'Blinda';
vardasIrPavarde = vardas + ' ' + pavarde + '!!!';
console.log('vardasIrPavarde ===', vardasIrPavarde);

// sujungti i stringa toki sakini is kintamuju.
// As esu James Bond. Man yra 33 metai. Mano megstamiausia salis yra Bahamas.

let sak1 = 'As esu ' + vardas + ' ' + pavarde + '. ';
let sak2 = 'Man yra ' + amzius + ' metai. ';
let sak3 = 'Mano megstamiausia salis yra ' + megstamiausiaSalis + '.';
let visiSakiniai = sak1 + sak2 + sak3;
console.log(visiSakiniai);
