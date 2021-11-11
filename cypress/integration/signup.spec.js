describe("Signup test", () => {
  it("can access landing page", () => {
    cy.visit("/");
    cy.contains("Welcome");
  });
});
