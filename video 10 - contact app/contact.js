// menggunakan core module file system untuk menulis file
// const { throws } = require('assert');
const fs = require('fs');

// menggunakan core module readline
const rd = require('readline');

const i =   rd.createInterface({
    input : process.stdin,
    output : process.stdout
});

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

// promise pertanyaan
const pertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        i.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
}

const simpanContact = (nama, email, noHP) => {

    const contact = {nama, email, noHP};

    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    contacts.push(contact);

    fs.writeFileSync(dataPath, JSON.stringify(contacts));

    i.close();
}

module.exports = {
    pertanyaan, simpanContact
}