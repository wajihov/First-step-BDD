package googleSearchSteps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class GoogleSearchSteps {

	WebDriver webDriver = null;

	@SuppressWarnings("deprecation")
	@Given("browser is open")
	public void browser_is_open() {
		System.out.println("Inside Step - browser is open");

		webDriver = new ChromeDriver();
		webDriver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		webDriver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		// webDriver.get("https://www.google.com");
	}

	@And("user is in search page")
	public void user_is_in_search_page() {
		System.out.println("Inside Step - user is in search page");

		webDriver.navigate().to("https://www.google.com");
		webDriver.manage().window().maximize();

	}

	@When("user entres one text in search box")
	public void user_entres_one_text_in_search_box() throws Exception {
		System.out.println("Inside Step - user entres one text in search box");

		webDriver.findElement(By.name("q")).sendKeys("Automation Step by Step");
		Thread.sleep(2000);

	}

	@And("hits enter")
	public void hits_enter() {
		System.out.println("Inside Step - hits enter");

		webDriver.findElement(By.name("q")).sendKeys(Keys.ENTER);
		// webDriver.findElement(By.name("btnK")).click();
	}

	@Then("user is navigated to search results")
	public void user_is_navigated_to_search_results() throws Exception {
		System.out.println("Inside Step - user is navigated to search results");

		webDriver.getPageSource().contains("Online Courses");
		Thread.sleep(2000);
		webDriver.close();
		webDriver.quit();
	}

}
