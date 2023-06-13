// describe('example to-do app', () => {
//     beforeEach(() => {
//       // Cypress starts out with a blank slate for each test
//       // so we must tell it to visit our website with the `cy.visit()` command.
//       // Since we want to visit the same URL at the start of all our tests,
//       // we include it in our beforeEach function so that it runs before each test
//       cy.visit('http://google.com')
//       cy.log('hello')
//     })
// })

/* ==== Test Created with Cypress Studio ==== */
it('studio.cy.js', function() {
    cy.viewport('iphone-se2')
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:19006/');
  cy.get(':nth-child(5) > :nth-child(2)').click().wait(3000);
  cy.get(':nth-child(4) > :nth-child(2)').click().wait(3000);
  cy.get(':nth-child(3) > .r-backgroundColor-7ldq1y').click();
  cy.get(':nth-child(5) > [style="transition-duration: 0.25s;"]').click().wait(3000);
  cy.get(':nth-child(4) > [style="transition-duration: 0.25s;"]').click().wait(3000);
  cy.get(':nth-child(6) > :nth-child(3)').click().wait(3000);
  /* ==== End Cypress Studio ==== */
});