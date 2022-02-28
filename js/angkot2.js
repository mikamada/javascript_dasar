var jmlAngkot = 10;
var beroperasi = 6;
var noAngkot = 1;

while(noAngkot <= beroperasi) {
    console.log("Angkot No. " + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

for(noAngkot = beroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}