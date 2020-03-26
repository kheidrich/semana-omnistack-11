const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        response.json(ongs);
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        let id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({ id, name, email, whatsapp, city, uf });
    
        response.json({ id });
    }
}