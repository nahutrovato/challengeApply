class Home {

    enterHome(){
        const title =  'Automation Exercise';
        cy.visit("/");
        cy.title().should('eq',title);
    };

    scrollDownMiddlePage(){
        cy.window().then( (win) => {
            const totalHeight = win.document.body.scrollHeight;
            const middleOfPage = totalHeight / 2;
            win.scrollTo(0, middleOfPage);
        });
    };

    chooseProduct(){
        cy.clickVisibleProductLink();
    };

}
module.exports = new Home();