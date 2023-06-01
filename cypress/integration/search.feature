Feature: google search

  Scenario Outline: searching for an animal
    Given I visit Google
    When I search for "<animal>"
    Then the results should contain the word "<animal>"

    Examples:
      | animal |
      | Dog    |
      | Pig    |
