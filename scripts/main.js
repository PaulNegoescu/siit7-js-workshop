'use strict';

// 1. media a trei numere
// function averageOfThree(a, b, c) {
//   return (Number(a) + Number(b) + Number(c)) / 3;
// }
// console.log('Media a trei numere:', averageOfThree('-6', 'asasa', 10));

// sa fie toate argumentele strict pozitive
function averageOfThree(a, b, c) {
  if (a >= 0 && b >= 0 && c >= 0) {
    return (Number(a) + Number(b) + Number(c)) / 3;
  } else {
    throw new Error('Toti parametrii trebuie sa fie numere pozitive!');
  }
}
// console.log('Media a trei numere:', averageOfThree(1, '4', 10));

// 2. Media a oricate numere
// function whatever(...args) {
//obtinem un array cu toate argumentele: ...args ca parametru
//aflam cate numere sunt: args.length
//adunam toate numerele
// output: suma, input sunt numerle dar vin pe rand
// la fiecare pas trebuie sa adunam noul numar cu suma celor dinaintea lui
//        practic trebuie sa pastram suma pentru a o avea la urmatoare iteratie
//            let sumaNoua = sumaAnterioara + args[i];
//        suma anterioara trebuie sa fie suma noua
//            sumaAnterioara = sumaNoua;
//        cele doua sume pot sa fie tinute in aceeasi variabila
//    pentru ca pe primul numar nu avem cu ce sa-l adunam pentru ca nu avem o suma initiala il vom aduna cu 0;
//        sumaAnterioara = 0
//impartim suma la args.length: asta e solutia, asta returnam

//   let suma = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] >= 0) {
//       suma = suma + Number(args[i]);
//     } else {
//       throw new Error('Toate argumentele ar trebui sa fie pozitive!');
//     }
//   }

//   return suma / args.length;
// }

// ... se numeste "rest operator"
// reprezinta restul argumentelor
function average(...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum = sum + Number(num);
  }

  return sum / numbers.length;
}

console.log('Media a oricate numere: ', average(2, 4, 6, 10));

// sa verificam daca un student are media de trecere (5) plecam de la note
// Input: Note
// Output: true sau false
function isStudentPassing(...grades) {
  // media studentului este >= 5
  //     avem functia de mai sus cu care putem obtine
  //          trebuie sa apelam functia
  //          salvam rezultatul functiei
  //                cream o variabila nou si in ea punem rezultatul functiei
  //      rezultatul de mai sus il comparam cu 5
  //      returnam rezultatul comparatiei

  // aici ... inseamna imprastie array-ul: cate un element devine un argument pentru functia apelata
  const avg = average(...grades);
  //   if (avg >= 5) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return avg >= 5;
}
//console.log(' Studentul trece anul:', isStudentPassing(0, 10));
if (isStudentPassing(3, 2, 5)) {
  console.log('Studentul a trecut');
} else {
  console.log('Studentul a picat');
}
