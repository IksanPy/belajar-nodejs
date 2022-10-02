const {pertanyaan, simpanContact} = require('./contact');

// fungsi utama
const main = async () => {

    const nama = await pertanyaan('Masukkan nama anda : ');
    const email = await pertanyaan('Masukkan email anda : ');
    const noHP = await pertanyaan('Masukkan no HP anda : ');

    simpanContact(nama, email, noHP);
    
}

main();
