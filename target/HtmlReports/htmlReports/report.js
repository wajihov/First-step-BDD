$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "feature to test login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeFeature"
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeFeature"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginSteps.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
});