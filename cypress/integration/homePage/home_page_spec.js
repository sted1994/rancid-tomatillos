describe("Home page", () => {

  beforeEach(() => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies' })

    cy.visit('http://localhost:3000')
  });

  it("Should show all movie posters", () => {
    cy.get(".poster-container").children().should("have.length", 40)
  });

  it("As a user I should be able to click a poster and see a summary", () => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'single-movies/money-plane-MS' })
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', { fixture: 'single-movies/money-plane-videos' })
    cy.get(".poster-container").children().first().click()
    cy.url().should("eq", 'http://localhost:3000/694919')
    cy.contains('Money Plane')

    cy.visit('http://localhost:3000')
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244', { fixture: 'single-movies/i-still-believe-MS' })
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244/videos', { fixture: 'single-movies/i-still-believe-videos' })
    cy.get(".poster-container").children().last().click()
    cy.url().should("eq", 'http://localhost:3000/585244')
    cy.contains('I Still Believe')

  });

})
