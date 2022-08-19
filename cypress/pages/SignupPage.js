
class SignupPage {
    go() {
        //cy.viewport(1440, 900) //altera resolução
        cy.visit('/') //abre endereço

        cy.get('a[href="/deliver"]').click() //click no botão
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    }

    fillForm(deliver) {
        //dados do deliver
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        //preenchimento do postalcode
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        //validação da street
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        //preenchimento do número e details
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
        //validação do district e cidade/uf
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)
        //definir método de entrega
        cy.contains('.delivery-method li', deliver.delivery_method).click()
        //upload de imagem
        cy.get('input[accept^="image/*"]').attachFile('/images/' + deliver.cnh)
    }

    submit(){
        //enviar formulário
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        // cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
}

export default new SignupPage;