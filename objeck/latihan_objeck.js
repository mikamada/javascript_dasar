function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun  = function(namaPenumpang, bayar){
        if (this.penumpang == 0) {
            alert('Angkot masih kosong');
            // keluar dari method
            return false;
        }

        for (var i = 0; i < this.penumpang.lenght; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas = bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Mika', ['Kalianda', 'Palas'], [], 0);
var angkot2 = new Angkot('Dodo', ['Sidomulyo', 'Way Panji'], [], 0);