console.log('Coba');

function cetakNama(nama)
{
    return `Hello, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa  = {
    nama : 'Ahmad Iksan',
    umur : 19,
    cetakNama(){
        return `Hi nama saya ahmad iksan`
    }
}

class Percobaan {
    constructor()
    {
        console.log('halo ini class percobaan');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;

module.exports = {
    cetakNama, PI
}
