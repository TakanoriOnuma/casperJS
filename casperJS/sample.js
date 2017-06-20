var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
  viewportSize: { width: 1000, height: 500 }
});
casper.userAgent('Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36');

// 色々なイベントをcasper.echoで表示するための設定
casper.on('remote.alert', function(msg) {
  this.echo("REMOTE-ALERT: " + msg);
});
casper.on('remote.message', function(msg) {
  this.echo("REMOTE-MESSAGE: " + msg);
});
casper.on("page.error", function(msg, trace) {
  this.echo("REMOTE-ERROR: " + msg);
  this.echo("TRACE:");
  for (var i = 0; i < trace.length; i++) {
    var trec = trace[i];
    this.echo("file: " + trec.file + " , line: " + trec.line + " , function: " + trec.function);
  }
});
casper.on("run.complete", function() {
  casper.echo("CASPER RUN COMPLETE");
});

casper
  .start('http://onuma:lab@design.team-lab.com/design/onuma/form-check/')
  .then(function() {
    this.capture('log/log1.png');
    this.fillSelectors('#form', {
      'input[name="name"]' : '大沼',
      'input[name="email"]' : 'onuma@team-lab.com',
      'input[name="tel"]' : '12345678900'
    }, false);

    this.wait(500, function() {
      this.capture('log/log2.png');
      this.click('#button');

      this.wait(500, function() {
        this.capture('log/log3.png');
      });
    });
  });

casper.run(function() {
  this.echo('exit').exit();
});
