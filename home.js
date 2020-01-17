const { openBrowser, openPage, closeBrowser } = require("./api/puppeteer-api");
const { runLighthouse } = require("./helpers/lighthouse");

console.log("=======***=======");
console.log("Starting lighthouse automation using puppeteer");
console.log("=======***=======");
let browser = null;
let page = null;
// opening a browser
console.log("Opening a browser");
browser = openBrowser(browser);

browser.then(async $browser => {
  console.log("Opening a web page");
  // Opening a page
  page = openPage("https://www.google.com", page, $browser);
  page
    .then($page => {
      // Check for the results on the browser
      // After the page is opened, we can send the web page to lighthouse
      // And navigate to the different web pages for lighthouse information.
      runLighthouse($browser, "https://www.google.com");
      //     .then(results => {
      //         const html = ReportGenerator.generateReport(results, "html");
      //         fs.writeFile(`./output/lighthouse_results.html`, html, err => {
      //           console.log(err);
      //         });
      //       });
      // }).catch(err => console.log(err));
      

        //    TO-DO
      // Sendind the adb commands to the chromebook along with the url
      
    })
    .catch(err => console.log(err));
});
