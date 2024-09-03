describe('My First Test', () => {
    it('CSSlocator', () => {
      cy.visit("https://www.russulboutique.com/")

      cy.get("input[placeholder='Search']:first").type("Shirt");

      cy.get("button[type='submit']:first").click()

      cy.get(".section-header__title.h2").contains("Shirt")
    
    })
})