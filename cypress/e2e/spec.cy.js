describe('first spec', () => {
  it('passes', () => {
    cy.visit('https://www.coppeldigital.com/')
    cy.get('.slick-current > :nth-child(1) > .contIMG').should('be.visible').click()
    cy.get('[aria-hidden="false"]').first().click()
    cy.get('.imgContainer').first().click()
    cy.get('.cart-button > .addToCart').click()

    // cy.get('.gridMenu > :nth-child(1)').then( container =>{
    //   cy.wrap(container).find('.imgContainer').first().click()
    // })
    
    //cy.get(':nth-child(1) > .parent > .div1 > .imgContainer').first().click()
    //cy.get('.div1 img.imgContainer').first().click({force: true}).wait(20000)
  })

})