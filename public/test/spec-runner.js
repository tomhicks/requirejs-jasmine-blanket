require(['test/app/test-view-spec'], function () {

  window.blanketTestJasmineExpected = 2;

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();
  var oldResult = htmlReporter.reportRunnerResults;

  jasmineEnv.addReporter(htmlReporter);

  window.jasmine_phantom_reporter = new jasmine.ConsoleReporter(console.log.bind(console));
  jasmineEnv.addReporter(jasmine_phantom_reporter);

  jasmineEnv.specFilter = function (spec) {
    return htmlReporter.specFilter(spec);
  };

  var currentWindowOnload = window.onload;
  window.onload = function () {
    if (currentWindowOnload) {
      currentWindowOnload();
    }
    execJasmine();
  };

  function execJasmine() {
    jasmineEnv.execute();
  }

});
