describe('CounterApp', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should increment the counter when +1 is clicked', () => {
        cy.get('h1').should('contain', 'CounterApp'); // Checking if the app is loaded
        cy.get('h2').should('contain', '10');  // Ensure default value is 10
        
        cy.get('button').contains('+1').click();
        
        cy.get('h2').should('contain', '11');
    });

    it('should decrement the counter when -1 is clicked', () => {
        cy.get('h1').should('contain', 'CounterApp'); // Checking if the app is loaded
        cy.get('h2').should('contain', '10');  // Ensure default value is 10
        
        cy.get('button').contains('-1').click();
        
        cy.get('h2').should('contain', '9');
    });

    it('should reset the counter to default when Reset is clicked', () => {
        cy.get('h1').should('contain', 'CounterApp'); // Checking if the app is loaded
        cy.get('h2').should('contain', '10');  // Ensure default value is 10
        
        // Let's first increment the counter
        cy.get('button').contains('+1').click();
        cy.get('h2').should('contain', '11');

        // Now, let's reset it
        cy.get('button').contains('Reset').click();

        cy.get('h2').should('contain', '10');
    });

});
