var lagi = true;

while (lagi) {
  //Komputer membangkitkan angka random
  var random = Math.floor(Math.random() * 10) + 1;
  console.log(random);

  // Player melakukan input (menebak)
  var guess = prompt("Pilihlah angka antara 1-10! \n(Anda memiliki tiga kali kesempatan)");

  // Alur Permainan
  var hasil = "";
  for (var chance = 3; chance >= 1; chance--) {
    if (guess == random) {
      hasil = "BENAR";
      alert("Angka tebakan anda " + hasil + ".");
      break;
    } else if (guess != random && chance > 1) {
      hasil = guess < random ? "terlalu RENDAH" : "terlalu TINGGI";

      guess = prompt("Angka tebakan anda " + hasil + ". \nCoba tebak lagi");
    } else if (guess != random && chance == 1) {
      hasil = "SALAH";
      alert("Angka tebakan anda " + hasil + ". \nKesempatan anda sudah habis.");
    }
  }

  lagi = confirm("Apakah anda ingin main lagi?");
}

alert("Terimakasih sudah bermain!");