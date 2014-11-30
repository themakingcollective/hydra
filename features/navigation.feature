Feature: Navigation

  Scenario: Navigating the menu
    Given I have opened the app
    Then I should see 2 menu items
    And "menuItem1" should display "Build"
    And "menuItem2" should display "Guess"

    When I touch "menuItem1"
    Then "title" should display "build"
    And I should see 2 menu items
    And "menuItem1" should display "colours"
    And "menuItem2" should display "patterns + colours"

    When I touch "menu"
    Then I should be on the start screen

    When I touch "menuItem2"
    Then "title" should display "guess"
    And I should see 3 menu items
    And "menuItem1" should display "which flag?"
    And "menuItem2" should display "which country?"
    And "menuItem3" should display "view all flags"
