describe("Home Page Carousel", () => {
  beforeEach(() => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies' })
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
    cy.get('.carousel-display').click()
    cy.url().should('eq', 'http://localhost:3000/659991')
  });

  it('Should be able to click control dots', () =>{
    cy.get('.control-dots').children().last().click()
    cy.get('.control-dots').children().first().click()
    cy.get('.selected').children('a').children('.slide').should('have.id', 694919)
  })
})
