$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/GoogleSearch.feature");
formatter.feature({
  "name": "feature to test Google search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "googleSearchSteps.GoogleSearchSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is in search page",
  "keyword": "And "
});
formatter.match({
  "location": "googleSearchSteps.GoogleSearchSteps.user_is_in_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entres one text in search box",
  "keyword": "When "
});
formatter.match({
  "location": "googleSearchSteps.GoogleSearchSteps.user_entres_one_text_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "googleSearchSteps.GoogleSearchSteps.hits_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "googleSearchSteps.GoogleSearchSteps.user_is_navigated_to_search_results()"
});
formatter.result({
  "status": "passed"
});
});