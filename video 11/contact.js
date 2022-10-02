// menggunakan core module file system untuk menulis file
// const { throws } = require('assert');
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');


// cek folder data
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    // buat folder
    fs.mkdirSync(dirPath);
}

// cek file contact
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    // buat file contacts.json
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const simpanContact = (nama, email, noHP) => {

    const contact = {nama, email, noHP};

    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    const error = [];  

    // validasi duplikat nama contact
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        // console.log(chalk.bgRed.bold("Contact sudah terdaftar, gunakan nama lain!"));
        error['nama'] = 'Contact sudah terdaftar, gunakan nama lain!';
        // return false;
    }

    // cek email
    if(email){
        if (!validator.isEmail(email)) {
        // console.log(chalk.bgRed.bold("Email tidak valid!"));
        error['email'] = 'Email tidak valid!';
        // return false;
            
        }
    }

    // cek noHP
    if (!validator.isMobilePhone(noHP, 'id-ID')) {
        // console.log(chalk.bgRed.bold("No Handphone tidak valid!"));
        error['noHP'] = 'No Handphone tidak valid!';
    // return false;
        
    }

    if (error.length > 0) {
        console.log(error);
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync(dataPath, JSON.stringify(contacts));

    console.log(chalk.bgGreen('Terima kasih sudah memasukkan data.'));
}

const hapusContact = (nama) => {

    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    const error = [];  

    // validasi cariNama nama contact
    const cariNama = contacts.find((contact) => contact.nama === nama);
    if (!cariNama) {
        // console.log(chalk.bgRed.bold("Contact sudah terdaftar, gunakan nama lain!"));
        error['nama'] = 'Contact tidak terdaftar, gunakan nama lain!';
        // return false;
    }

    if (error.length > 0) {
        console.log(error);
        return false;
    }

    contacts.pop(contact);

    fs.writeFileSync(dataPath, JSON.stringify(contacts));

    console.log(chalk.bgGreen('Contact berhasil dihapus.'));
}

module.exports = {
    simpanContact, hapusContact
}