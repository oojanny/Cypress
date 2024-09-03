///<reference types = "Cypress" />

describe ('Handle dropdowns', () => {
    
    it.skip('Dropdown with select', () => {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        //Dropdown with select tag
        cy.get('#zcf_address_country')
        .select('Italy')
        //verify
        .should('have.value', 'Italy')

    })

    it.skip('Dropdown without select', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        //Dropdown with select tag
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Japan').type('{enter}')

        //verify
        cy.get('#select2-billing_country-container')
        .should('have.text', 'Japan')

    })

    it.skip('Auto Suggest Dropdown', () => {

        cy.visit('https://www.wikipedia.org/')

        //Dropdown with different options
        cy.get('#searchInput').type('Nigeria')
        cy.get('.suggestion-title').contains('Nigella Lawson').click()   

    })

    it('Dynamic Dropdown', () => {

        cy.visit('https://www.google.com/')

        //Dropdown with select tag
        cy.get("textarea[name='q']").type('Cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length', 13)

        cy.get('div.wM6W7d>span').each(  ($el, index, $list)=>{
            if($el.text()=='cypress automation interview questions')
            {
                cy.wrap($el).click()
            }
        })

        //verify
        cy.get("textarea[name='q']").should('have.value', 'cypress automation interview questions')

    })
})