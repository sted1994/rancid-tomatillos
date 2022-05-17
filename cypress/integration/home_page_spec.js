describe("HomePage", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should be able to click forward through carousel', () => {
    cy.get('.selected').children('a').children('.slide').should('have.id', 694919)
    cy.get('.control-next').click()
    cy.get('.selected').children('a').children('.slide').should('have.id', 718444)
  });

  it('Should be able to click back through carousel', () => {
    cy.get('.selected').children('a').children('.slide').should('have.id', 694919)
    cy.get('.control-prev').click()
    cy.get('.selected').children('a').children('.slide').should('have.id', 659991)
  });

  it('Should be able to click movie in carousel to see summary', () => {
    cy.get('.selected').children('a').children('.slide').children('.carousel-card-img').click()

  })

  // it('Should be able to click control dots', () =>{
  //   cy.get('.control-dots')
  // })
})
