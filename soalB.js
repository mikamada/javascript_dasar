const nilaiSiswa = [
    {
      nama:"nando",
      nilai:40
    },
    {
      nama:"dandi",
      nilai:60
    },
    {
      nama:"rio",
      nilai:87
    },
    {
      nama:"satria",
      nilai:50
    }
  ]

// for(let i = 0; i < nilaiSiswa.length; i++){
//   if(nilaiSiswa[i].nilai < 50) {
//     console.log(nilaiSiswa[i].nama)
//   }
// }
let x = nilaiSiswa.find(function(e){
  if (e.nilai < 50){
    return e.nama
  }
})

console.log(x)

// no 2
// for (let i = 0; i < nilaiSiswa.length; i++) {
//   if(nilaiSiswa[i].nilai > 50 && nilaiSiswa[i].nilai < 87){
//     console.log('siswa yang mendapat nilai tinggi ke 2: ' + nilaiSiswa[i].nama);
//   }
// }


