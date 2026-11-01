Feature: DemoBlaze Website

    # Cucumber Playwright Automation Framework

    # Git branch practise

    Background:
        Given user navigates to the DemoBlaze website

    Scenario: verify DemoBlaze website title
        Then website title should be displayed correctly
        Then website URL should be displayed correctly
        When user clicks on Home link
        Then Home link should be visible
        When user clicks on contact link
        Then Contact link should be visible
        When user closes the Contact popup
        When user clicks the About link
        Then aboutuslink should be visible
        When user closes the about popup
        When user cliks on phones category
        Then phones category products should be displayed
        When user clicks on Laptops category
        Then Laptops category products should be displayed



    Scenario Outline: verify product categories
        When user selects "<category>" category
        Then  "<product>" should be displayed

        Examples:
            | category | product           |
            | Phones   | Samsung galaxy s6 |
            | Laptops  | MacBook Pro       |
            | Monitors | Apple monitor 24  |

    Scenario: Verify multiple product categories
        Then following product categories should be available
            | Category |
            | Phones   |
            | Laptops  |
            | Monitors |

    Scenario: Verify product using this
        When user stores a product name
        Then stored product name should be displayed
    Scenario: Verify invalid login
        When user enters invalid login credentials
        Then login error message  should be displayed


