const { launchChromeAndRunLighthouse } = require("./helpers/lighthouse");
const ReportGenerator = require("lighthouse/lighthouse-core/report/report-generator");
const fs = require("fs");

const opts = {
  chromeFlags: ["--show-paint-rects"]
};

urls = [
  "http://www.youtube.com",
  "http://www.google.com",
  "http://www.facebook.com"
];

launchChromeAndRunLighthouse("http://www.google.com", opts).then(results => {
  const html = ReportGenerator.generateReport(results, "html");
  fs.writeFile("./output/lighthouse_results.html", html, err => {
    console.log(err);
  });
});

urls.forEach($url => {});
