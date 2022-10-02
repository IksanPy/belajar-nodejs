// const fs = require('fs'); // core module
// const cetakNama =  require('./coba'); //local modul
// const moment  = require('moment'); // third party module
 
console.log('Hello world');

// node js tidak bisa menjalankan funtion dari file lain
// node js menganut module system
// solusinya menggunakan keyword export pada file funtion itu berada agar bisa digunakan difile yang lain

const coba = require('./coba');

console.log(coba.cetakNama('Ahmad Iksan'), coba.PI);