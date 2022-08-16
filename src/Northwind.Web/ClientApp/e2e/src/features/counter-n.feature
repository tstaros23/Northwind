Feature: Increment the n Counter Component
    This feature lets a user increment the counter by N input.
Scenario: Increment by N input scenario
    Given I am on the counter-n page
    When I fill out a field to input 3 and click 21 times
    Then the counter-n should show "63"