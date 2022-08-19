var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11940028922',
            address: {
                postalcode: '03590120',
                street: 'Avenida Padre Francisco de Toledo',
                number: '294',
                details: 'Bloco 1 Ap 22',
                district: 'Conjunto Habitacional Padre Manoel da Nóbrega',
                city_state: 'São Paulo/SP'
                },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}