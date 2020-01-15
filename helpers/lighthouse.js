const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const {URL} = require('url');

async function runLighthouse(browser, url) {
  browser.on('targetchanged', async target => {
    const page = await target.page();
  })
  // return chromeLauncher
  //   .launch({ chromeFlags: opts.chromeFlags })
  //   .then(chrome => {
  //     opts.port = chrome.port;
  //     return lighthouse(url, opts, config).then(results => {
  //       // use results.lhr for the JS-consumable output
  //       // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
  //       // use results.report for the HTML/JSON/CSV output as a string
  //       // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
  //       return chrome.kill().then(() => results.lhr);
  //     });
  //   });
  const {lhr} = await lighthouse(url, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'json',
    logLevel: 'info' 
  });

  console.log(`Lighthouse scores: ${Object.values(lhr.categories).map(c => c.score).join(', ')}`);
}


async function connectToChromeBook(){
  // Here we can run the shell script 
  // Which will send the lighthouse commands to the chromebook and get the results from the lighthouse command
}



module.exports = {
  runLighthouse, connectToChromeBook
};
