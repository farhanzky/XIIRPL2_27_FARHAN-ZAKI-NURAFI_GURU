const mongoose = require('mongoose')

const GuruSchema = new mongoose.Schema({
        nama: {
                type: String,
                required: [true, 'silahkan isikan nama'],
                unique: true
        
        },
        nip: {
                type: String,
                require: [true, 'silahkan masukan nip'],
                unique: true
        },
        gender: {
                type: String,
                require: [true, 'silahkan masukan gender'],
                
        },
        mapel: {
                type: String,
                require: [true, 'silahkan masukan mapel'],
                
        },
        email: {
                type: String,
                required: true,
                match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'silahkan isikan emial validasi']
        }
})

module.exports = mongoose.model('guru', GuruSchema)