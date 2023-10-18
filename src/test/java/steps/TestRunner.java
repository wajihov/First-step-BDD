package steps;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", 
glue = { "steps" },
monochrome = true, 
plugin = { "pretty","junit:target/JunitReports/JunitReports.xml",
					"json:target/JsonReports/JsontReports.json",
					"html:target/HtmlReports/htmlReports"}, 
tags = "@smoketest")

public class TestRunner {

}
