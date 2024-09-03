// Define a custom Cypress command to click on an element and wait
Cypress.Commands.add('clickAndWait', { prevSubject: 'element' }, (element, waitTime = 3000) => {
  cy.wrap(element).click()
  cy.wait(waitTime)
})


describe('My First Test', () => {
  it('Limestone2.0', () => {
    cy.visit("https://communityv2.dev.limestone.ng/")

    //LOGIN
    cy.get("input[name='emailAddress']").type("limestone@yopmail.com").wait(3000)
    cy.get("input[name='password']").type("Opeyemi#1").wait(3000)
    cy.get("button[type='submit']").click().wait(3000)

    cy.contains('STONE 2').clickAndWait()

    cy.contains('Dashboard').clickAndWait()

    //weekly
    cy.get('#demo-select-small').click()
    cy.get("[data-value='1']").type('{enter}')

    //monthly
    cy.get('#demo-select-small').click()
    cy.get("[data-value='2']").type('{enter}')

    //yearly
    cy.get('#demo-select-small').click()
    cy.get("[data-value='3']").type('{enter}')
  
  })

  it('Resident & Address', () => {
    cy.visit("https://communityv2.dev.limestone.ng/")

    cy.get("input[name='emailAddress']").type("limestone@yopmail.com")
    cy.get("input[name='password']").type("Opeyemi#1")
    cy.get("button[type='submit']").click().wait(3000)

    cy.contains('STONE 2').clickAndWait()

    cy.contains('Residents').clickAndWait(2000)

    cy.contains('Addresses').clickAndWait()
    cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(5) > div:nth-child(1) > div:nth-child(2)').click();
    cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > p:nth-child(1)").should('have.text', 'Landlord')
  })

  it.only('Group', () => {
    cy.visit("https://communityv2.dev.limestone.ng/")

    cy.get("input[name='emailAddress']").type("limestone@yopmail.com")
    cy.get("input[name='password']").type("Opeyemi#1")
    cy.get("button[type='submit']").click().wait(3000)

    cy.contains('STONE 2').clickAndWait()

    cy.contains('Groups').clickAndWait()

    cy.get('.button-two').click()
    cy.get('#modal-modal-title').contains('Create New Group')
    


  })

  it('', () => {
    cy.visit("https://communityv2.dev.limestone.ng/")

    cy.get("input[name='emailAddress']").type("limestone@yopmail.com")
    cy.get("input[name='password']").type("Opeyemi#1")
    cy.get("button[type='submit']").click().wait(3000)

    cy.contains('STONE 2').clickAndWait()

    cy.contains('Dues').clickAndWait()
    cy.contains('Finances').clickAndWait()
    cy.contains('Complaints').clickAndWait()
    cy.contains('Broadcast').clickAndWait()
    cy.contains('Gate Pass').clickAndWait()
    cy.contains('Licenses').clickAndWait()
    cy.contains('Settings').clickAndWait()
    cy.contains('Support').clickAndWait()
  })
})