describe("Assertions demo", () => {
    it("Implicit Assertions", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain', 'orangehrm')

        //cy.url().should('include', 'orangehrmlive.com')
        //.should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain', 'orangehrm')

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'Bluehrm')

        cy.title().should('include', "Orange")
        .and('eq', "OrangeHRM")
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        //capture all the link in a page
        cy.get('a').should('have.length.gt', 4);

        cy.get("input[placeholder='Username']").type("Admin")  //provides a value into input box
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')  // value check

        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("input[placeholder='Password']").should('have.value', 'admin123')

    })

    it("Explicit Assertions", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expName = "Test 93sai Lokhandesreesree";
        
        cy.get(".oxd-userdropdown-name").then(  (x)=>{
            let actName = x.text()

            // BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName, expName)
            assert.not.equal(actName, expName)

        })


    })

})