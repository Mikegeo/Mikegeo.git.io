module.exports = {
  'Demo test ' : function (browser) {
    browser
      .url('http://www.localhost:8080/app/html/diet2.html')
      .waitForElementVisible('body', 1000)
      .click('button[name=breakfast]')
      .waitForElementVisible('table[name=dvTable]', 2000)
      .click('button[name=lunch]')
      .waitForElementVisible('table[name=dvTable]', 2000)
      .end();
  }
};
