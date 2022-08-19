import signup from '../pages/SignupPage'

describe('Signup', ()=>{

    // before(()=>{
    //     cy.log('Isso é executado uma única vez ANTES de TODOS os casos de testes')
    // })

    // beforeEach(()=>{
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    // })

    // after(()=>{
    //     cy.log('Isso é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(()=>{
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    // })

    beforeEach(function(){
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    })

    it('User Should Be a Deliver', function(){

        
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
               
        //validar mensagem de sucesso
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        
        signup.modalContentShouldBe(expectedMessage)
        

    })

    it('Incorrect Document', function(){
        
        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()

        //validar mensagem de erro
        const expectedMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(expectedMessage)
    })

    it('Incorrect Email', function(){
        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()

        //validar mensagem de erro
        const expectedMessage = 'Oops! Email com formato inválido.'
        signup.alertMessageShouldBe(expectedMessage)

    })
})