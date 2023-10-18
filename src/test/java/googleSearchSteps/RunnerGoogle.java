package googleSearchSteps;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/GoogleSearch.feature", 
glue = { "googleSearchSteps" },
monochrome = true, 
plugin = { "pretty","junit:target/JunitReports/JunitReports.xml",
					"json:target/JsonReports/JsontReports.json",
					"html:target/htmlReports"})
public class RunnerGoogle {

}
