Feature: Hello world

  Scenario: Hello world
    When I touch "someButton"
    Then "someLabel" should display "Hello, world"

    When I touch "someButton"
    Then "someLabel" should display "2 times"

    When I touch "someButton"
    Then "someLabel" should display "3 times"
