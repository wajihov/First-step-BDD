Feature: feature to test Google search functionality

  Scenario: Validate google search is working
    Given browser is open
    And user is in search page
    When user entres one text in search box
    And hits enter
    Then user is navigated to search results
