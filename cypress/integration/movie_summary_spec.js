describe("Movie Summary", () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.visit('http://localhost:3000/rancid-tomatillos/694919')
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'single-movies/money-plane-MS' })
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', { fixture: 'single-movies/money-plane-videos' })

  })
    it('Should display movie details matching id path', () => {
      cy.url().should("eq", 'http://localhost:3000/rancid-tomatillos/694919')
      cy.contains('Money Plane')
    })

    it('Should show user a movie trailer', () => {
      cy.get('.slide').children().children().should('have.attr', 'src', "https://www.YouTube.com/embed/aETz_dRDEys")
    })

    it('Should display trailer carousel for movies with multiple trailers', () => {
      cy.visit('http://localhost:3000/rancid-tomatillos/585244')
      cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244', { fixture: 'single-movies/i-still-believe-MS' })
      cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244/videos', { fixture: 'single-movies/i-still-believe-videos' })
      cy.get('.selected').children().children().should('have.attr', 'src', "https://www.YouTube.com/embed/0H6O4Ty9oBg")
      cy.get(".control-next").click()
      cy.get('.selected').children().children().should('have.attr', 'src', "https://www.YouTube.com/embed/BkgsVV0xF-s")
    })

    it('Should allow user to return to home page by clicking rancid button', () => {
      cy.get('.logo').click()
      cy.url().should("eq", 'http://localhost:3000/rancid-tomatillos/')
    })

})
