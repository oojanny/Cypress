
describe("Alerts", ()=> {
    it("Simple JS Alerts", ()=> {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        //validating text which is present in Alert window
        cy.on('window:alert', (t)=> {
            expect(t).to.contains('I am a JS Alert'); //checks if the text 
        })

        //Alert window automatically closed by cypress, validate message
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    it("Confirmation Alert-OK", ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=> {
            expect(t).to.contains('I am a JS Confirm');
        })

        //cypress automatically closed alert window by using OK button-default
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it("JS Confirm Alert-Cancel", ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=> {
            expect(t).to.contains('I am a JS Confirm');
        })

        //cypress closes Alert window using CANCEL button
        cy.on('window:confirm', ()=> false);
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })


    it("JS Prompt Alert-OK", ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=> {
            cy.stub(win, 'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();
        cy.get('#result').should('have.text', 'You entered: welcome')

    })

    // it.only("JS Prompt Alert-CANCEL", ()=> {
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    //     cy.window().then((win)=> {
    //         cy.stub(win, 'prompt').returns('welcome');
    //     })

    //     cy.get("button[onclick='jsPrompt()']").click();

    //     cy.on('window:prompt', ()=> false);
    //     cy.get('#result').should('have.text', 'You entered: welcome');

    // })

    // it("Authenticated Alert", ()=> {
    //     //1st Approach
    //     cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth:
    //                                                                 {
    //                                                                     username:'admin',
    //                                                                     password:'admin'
    //                                                                 }
    //                                                             } );
    //     cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

    // })

    it.only("Authenticated Alert", ()=> {
        //2nd Approach
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations');

    })
})

