Feature: Navigation

  Scenario: Navigating the menu
    Given I have opened the app
    Then I should not see "menu"
    And I should see "buildMenuItem"
    And I should see "guessMenuItem"

    When I touch "buildMenuItem"
    Then I should see "menu"
    Then "title" should display "build"
    And I should see "coloursMenuItem"
    And I should see "patternsMenuItem"

    When I touch "coloursMenuItem"
    Then I should see "menu"
    Then "title" should display "colours"

    When I touch "menu"
    Then I should not see "menu"
    And I should see "buildMenuItem"
    And I should see "guessMenuItem"

    When I touch "guessMenuItem"
    Then I should see "menu"
    Then "title" should display "guess"
    And I should see "whichFlagMenuItem"
    And I should see "whichCountryMenuItem"
    And I should see "viewAllFlagsMenuItem"
