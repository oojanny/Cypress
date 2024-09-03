
describe ('Handle Tabs', ()=>{
    it('First Approach', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows'); //parent tab

        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click(); //clicking on link

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);

        //operations
        cy.go('back'); //back to parent tab
    })

    it.only('Second Approach', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows'); //parent tab

        cy.get("a[href='/windows/new']").then((e)=>{
            let url = e.prop('href');

            cy.visit(url);
        }) //clicking on link

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        
        //operations
        cy.go('back'); //back to parent tab
    })
})