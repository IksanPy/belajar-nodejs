// menggunakan core module file system untuk menulis file
const { throws } = require('assert');
const fs = require('fs');

// menggunakan metode syncronous
// try {
//     fs.writeFileSync('data/text.txt', 'Hello world again');
// } catch (error) {
//     console.log(error);
// }


// // mengguanakan mentode asyncronous
// fs.writeFile('data/textAsync.txt', 'Hello world with Async', (err) => {
//     console.log(err);
// });

// menggunakan core module file system untuk membaca file(readfile)
// sync
// const file = fs.readFileSync('data/text.txt', 'utf-8');
// console.log(file);

// async
// const file = fs.readFile('data/text.txt','utf-8', (e, data) => {
//     if (e) throw e;
//     console.log(data);
// });


// menggunakan core module readline
const rd = require('readline');

const i =   rd.createInterface({
    input : process.stdin,
    output : process.stdout
});

i.question('Masukkan nama  : ', (nama) => {
    i.question('Masukkan umur : ', (umur) => {
        console.log(`nama anda ${nama}, umur anda ${umur}`);
        const contact = {
            nama, umur
        };

        const contacts = JSON.parse(fs.readFileSync('data/contacts.json', 'utf-8'));

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        i.close();
    })
});
