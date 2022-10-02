// mengambil argumen
// console.log(process.argv[2]);
// const command = process.argv[2];
// if (command == 'add') {
//     console.log('added');
// } 

const yargs = require("yargs");
const { simpanContact, hapusContact } = require("./contact");

// example
// yargs.command('add', 'Manambahkan contact baru', () => {}, (argv) => {
//     console.log(argv.nama);
// });

yargs.command([{
    command : 'add',
    describe: 'Menambahkan contact baru',
    builder :{
        nama : {
            describe : 'Nama Lengkap', 
            demandOption:true,
            type : 'string'
        },
        email : {
            describe : 'Email',
            demandOption : false,
            type : 'string'
        },
        noHP : {
            describe : 'Nomor Handphone',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
        const contact = {
            nama : argv.nama,
            email : argv.email,
            noHP : argv.noHP,
        }

        // console.log(contact);
        simpanContact(argv.nama, argv.email, argv.noHP);
    }
},{
    command : 'remove',
    describe : 'Menghapus contact',
    builder : {
        nama : {
            describe : 'Nama Lengkap',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        hapusContact(argv.nama);
    }
}])


// run
yargs.parse();