casper.test.begin('formエラーチェックテスト', 7, function suite(test) {
  casper.start('http://onuma:lab@design.team-lab.com/design/onuma/form-check/', function() {
    test.assertHttpStatus(200, 'status check');

    // エラーが非表示かチェック
    test.assert(!casper.visible('#name + .error > .invalid'), '名前エラーチェック');
    test.assert(!casper.visible('#email + .error > .invalid'), 'emailエラーチェック');
    test.assert(!casper.visible('#tel + .error > .invalid'), '電話番号エラーチェック');

    casper.click('#button');
  });

  casper.then(function() {
    // エラーが表示されているかチェック
    test.assert(casper.visible('#name + .error > .invalid'), '名前エラーチェック');
    test.assert(casper.visible('#email + .error > .invalid'), 'emailエラーチェック');
    test.assert(casper.visible('#tel + .error > .invalid'), '電話番号エラーチェック');
  });

  casper.run(function() {
    casper.capture('test/test1.png');
    test.done();
  });
});


casper.test.begin('formエラーチェックテスト（名前のみ入力）', 7, function suite(test) {
  casper.start('http://onuma:lab@design.team-lab.com/design/onuma/form-check/', function() {
    test.assertHttpStatus(200, 'status check');

    // エラーが非表示かチェック
    test.assert(!casper.visible('#name + .error > .invalid'), '名前エラーチェック');
    test.assert(!casper.visible('#email + .error > .invalid'), 'emailエラーチェック');
    test.assert(!casper.visible('#tel + .error > .invalid'), '電話番号エラーチェック');

    casper.fillSelectors('#form', {
      'input[name="name"]' : '大沼'
    }, false);

    casper.click('#button');
  });

  casper.then(function() {
    // 名前以外がエラーが表示されているかチェック
    test.assert(!casper.visible('#name + .error > .invalid'), '名前エラーチェック');
    test.assert(casper.visible('#email + .error > .invalid'), 'emailエラーチェック');
    test.assert(casper.visible('#tel + .error > .invalid'), '電話番号エラーチェック');
  });

  casper.run(function() {
    casper.capture('test/test2.png');
    test.done();
  });
});


casper.test.begin('画面遷移のテスト', 5, function suite(test) {
  casper.start('http://onuma:lab@design.team-lab.com/design/onuma/form-check/', function() {
    test.assertHttpStatus(200, 'status check');

    // エラーが非表示かチェック
    test.assert(!casper.visible('#name + .error > .invalid'), '名前エラーチェック');
    test.assert(!casper.visible('#email + .error > .invalid'), 'emailエラーチェック');
    test.assert(!casper.visible('#tel + .error > .invalid'), '電話番号エラーチェック');

    casper.fillSelectors('#form', {
      'input[name="name"]' : '大沼',
      'input[name="email"]' : 'onuma@team-lab.com',
      'input[name="tel"]' : '12345678900'
    }, false);

    casper.click('#button');
  });

  casper.then(function() {
    // SUCCESSのページに飛んだか
    test.assertUrlMatch(/success.html/, 'ページ遷移のチェック');
  });

  casper.run(function() {
    casper.capture('test/test3.png');
    test.done();
  });
});
