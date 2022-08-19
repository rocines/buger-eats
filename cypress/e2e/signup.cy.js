import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

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

    // beforeEach(function(){
    //     cy.fixture('deliver').then((d)=>{
    //         this.deliver = d
    //     })
    // })

    it.skip('User Should Be a Deliver', function(){

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
               
        //validar mensagem de sucesso
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        
        signup.modalContentShouldBe(expectedMessage)
        

    })

    it.skip('Incorrect Document', function(){
        
        var deliver = signupFactory.deliver()

        deliver.cpf = '000000000aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        //validar mensagem de erro
        const expectedMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(expectedMessage)
    })

    it.skip('Incorrect Email', function(){

        var deliver = signupFactory.deliver()

        deliver.email = 'rocinesgmail.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        //validar mensagem de erro
        const expectedMessage = 'Oops! Email com formato inválido.'
        signup.alertMessageShouldBe(expectedMessage)

    })

    it('Required Fields', function(){
        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })
})