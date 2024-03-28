Feature: View Product on Website

    Scenario: View product after scrolling down halfway on the website
        Given I am on the website homepage
        When I scroll down halfway on the page
        And I choose a product and click on "View product" under the picture of the product
        Then I should be directed to the product page to view its details