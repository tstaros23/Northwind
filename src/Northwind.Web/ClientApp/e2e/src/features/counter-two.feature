Feature: Increment the counter by two
    This feature lets a user increment (by two) the counter by clicking on the button.

Scenario: Basic increment two scenario
    Given I am on the counter-two page
    When I click on the increment button 21 times
    Then The counter should show "42"