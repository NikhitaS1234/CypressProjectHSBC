describe('HSBC Login scenarios test scenarios', () => {

    beforeEach(() => {
        cy.visit('https://www.hsbc.co.in/');
    })

    it('Login test', () => {
        cy.get('div.header-logo>h1>img').should('be.visible');
        cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');
        cy.get('a').contains('Log On').click({ force: true });
        cy.visit('https://www.hsbc.co.in/security/');
        cy.title().should('eq', 'Username | Log on | HSBC');
        cy.get('button#username_submit_btn').should('be.visible');
        cy.get('button#username_submit_btn').should('be.disabled');
        cy.get('input#username').type('ns@gmai.com');
        cy.get('button#username_submit_btn').should('be.enabled');
        cy.xpath('//*[@id="username_help_link"]/span/span[1]').should('be.visible');
        cy.get('a#username_help_link').click({ force: true });
        cy.xpath('//*[@id="help_content_1"]/h3').contains('Username');
        cy.xpath('//*[@id="username_help_link"]/span/span[1]').should('be.visible');
        cy.xpath('//*[@id="username_help_link"]/span/span[1]').should('be.visible').click({ force: true });


    })
})