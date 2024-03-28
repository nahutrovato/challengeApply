class ProductDetails {

    checkProductDetails(){
        cy.get('@productData').then(({ linkProductNumber, textProductNumber }) => {
            cy.url().should('include',linkProductNumber)
            cy.get('.product-information > h2').invoke('text').then((text) => {
                expect(text).to.equal(textProductNumber)        
            });
        });
    };
    
}
module.exports = new ProductDetails();