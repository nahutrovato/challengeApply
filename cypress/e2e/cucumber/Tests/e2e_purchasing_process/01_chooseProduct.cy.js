import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
const Home = require('../../Pages/HomePage');
const ProductDetails = require('../../Pages/ProductDetailsPage');
Given("I am on the website homepage", () => {
    Home.enterHome();
});

When('I scroll down halfway on the page', () => {
    Home.scrollDownMiddlePage();
});

And('I choose a product and click on "View product" under the picture of the product', () => {
    Home.chooseProduct();
});

Then('I should be directed to the product page to view its details', () => {
    ProductDetails.checkProductDetails();
});