Feature: Navigation

  Scenario: Navigating the menu
    Given I have opened the app
    Then I should see "buildMenuItem"
    And I should see "guessMenuItem"

    When I touch "buildMenuItem"
    Then "title" should display "build"
    And I should see "coloursMenuItem"
    And I should see "patternsMenuItem"

    When I touch "menu"
    Then I should see "buildMenuItem"
    And I should see "guessMenuItem"

    When I touch "guessMenuItem"
    Then "title" should display "guess"
    And I should see "whichFlagMenuItem"
    And I should see "whichCountryMenuItem"
    And I should see "viewAllFlagsMenuItem"
