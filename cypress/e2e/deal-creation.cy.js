describe('Pipedrive Deal Creation Flow', () => {
  it('Logs in and navigates to Deals page', () => {
    cy.visit('https://app.pipedrive.com/auth/login');
    cy.get('input[id="login"]').type('ruchilanicr@gmail.com');
    cy.get('input[id="password"]').type('1qaz2wsx@E');
    cy.get('button[class="puco-button puco-button--submit puco-button--width-auto submit-button bt"]').click();

    cy.origin('https://myown4.pipedrive.com', () => {
      cy.url({ timeout: 10000 }).should('include', '/everyone');
      cy.get('button[class="cui5-button cui5-button--variant-primary cui5-button-group-item--first-child"]').click();
      cy.get('div[data-test-key="person_id"] input[type="text"]').type('Martin Josh',{ delay: 50 });
      cy.get('div[data-test-key="org_id"] input[type="text"]').type('Martin Deals', { delay: 50 });
      cy.get('div[data-test-key="title"] input[type="text"]').type('Deals By Martin', { delay: 50 });
      cy.get('div[data-test-key="value"] input[type="text"]').type('30000', { delay: 50 });
      cy.get('div[data-test-key="expected_close_date"] input[type="text"]').type('2025-05-1', { delay: 50 });
      cy.get('button[class="cui5-button cui5-button--variant-primary"]').click();
    });
  });
});
