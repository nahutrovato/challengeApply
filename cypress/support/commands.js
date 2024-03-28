// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add("clickVisibleProductLink", () => {
    cy.window().then((win) => {
      const elementVisibleToClick = 0;
      const windowHeight = win.innerHeight;
      const windowTop = win.scrollY;
      const windowBottom = windowTop + windowHeight;
  
      cy.get('a[href*="/product_details/"]').filter(':visible').then((elements) => {
        let productLinks = [];
        elements.each((index, element) => {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + windowTop;
          const elementBottom = rect.bottom + windowTop;
  
          if (elementTop < windowBottom && elementBottom > windowTop) {
            const linkText = element.innerText;
            const linkHref = element.getAttribute('href');
            const productNumber = linkHref.match(/(\d+)/)[0];
            const productText = element.closest('.product-image-wrapper').querySelector('.productinfo p').innerText.trim();
            productLinks.push({
              element: element,
              text: linkText,
              href: linkHref,
              number: productNumber,
              productText: productText
            });
          };
        });
  
        const selectedProduct = productLinks[elementVisibleToClick];
        const linkProductNumber = selectedProduct.href;
        const textProductNumber = selectedProduct.productText;
  
        const selectedElement = selectedProduct.element;
        cy.wrap(selectedElement).click();
  
        cy.wrap({ linkProductNumber, textProductNumber }).as('productData');
    });
  });
});
  
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })