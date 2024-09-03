describe("Check UI Elements", () =>{
    /*it("Checking Radio Buttons", () =>{
       cy.visit("http://test.rubywatir.com/radios.php")

        //visibility of radio button
       cy.get("input[value='Radio1']").should('be.visible')
       cy.get("input[value='Nope']").should('be.visible')
       cy.get("input#radioId").should('be.visible')


       //selecting Radio buttons
       cy.get("input[value='Radio1']").check().should('be.checked')
       cy.get("input[value='Nope']").should('not.be.checked')
       cy.get("input#radioId").should('not.be.checked')


       cy.get("input[value='Nope']").check().should('be.checked')
       cy.get("input[value='Radio1']").should('not.be.checked')
       cy.get("input#radioId").should('not.be.checked')
       
       cy.get("input#radioId").check().should('be.checked')
       cy.get("input[value='Nope']").should('not.be.checked')
       cy.get("input[value='Radio1']").should('not.be.checked')

    })*/

    it("Checking Check Boxes", ()=> {
        cy.visit("http://test.rubywatir.com/checkboxes.php")

        //visibility of checkboxes
        //cy.get("input[value='football']").should('be.visible')

        //Selecting single check box - soccer
        //cy.get("input[value='football']").check().should('be.checked')

        //Unselecting checkbox
        //cy.get("input[value='football']").uncheck().should('not.be.checked')

        //Selecting all the check boxes
        //cy.get("input[type='checkbox']").check().should('be.checked')
        //cy.get("input[type='checkbox']").uncheck().should('not.be.checked')

        //select the first checkbox
        cy.get("input[type='checkbox']").first().check()
        cy.get("input[type='checkbox']").last().check()
     
    })
})