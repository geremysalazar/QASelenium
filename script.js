var webdriver = require(‘selenium-webdriver’);

var browser_name = new webdriver.Builder();

withCapabilities(webdriver.Capabilities.chrome()).build();

browser.get('https://techboss.com.co/');