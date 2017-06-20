# casperJSを使ったブラウザ検証
フォーム登録後に別ページに飛ぶ簡単なサイトをcasperJSでブラウザ操作・テストをする。

## ファイル構成
/index.html - トップページ  
/success.html - 遷移先のページ  
/casperJS - casperJSが置かれているフォルダ  
 |-package.json - npm installパッケージ  
 |-sample.js - casperJSで操作するサンプルプログラム  
 |-test.js - casperJSでテストするプログラム  
 |-log - sample.jsではきだされるログファイル  
 |-test - test.jsではきだされるログファイル  

## インストール方法
casperJSフォルダに移動して、`$ npm install`をする。  
pythonも必要なので、事前にインストールしておく(2系で検証。3系も多分大丈夫)。  
※ローカルで済むようにしていますが、もしかしたら上手くいかないかもしれません。

## 実行方法
### サンプル実行
`$ npm start`(sample.jsが走る)

### テスト実行
`$ npm run test`(test.jsが走る)