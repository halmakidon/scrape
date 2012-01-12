#!/usr/bin/env node

// モジュールをロードする
var util = require('util'),
  fs = require('fs'),
  jsdom = require('jsdom'),
  // domToHtmlの呼び出しが面倒。
  Path = require('path'),
  jsdomHome = Path.dirname(require.resolve('jsdom')),
  domToHtml = require(Path.resolve(jsdomHome, 'jsdom/browser/domtohtml'));
// JQueryのパス
var jquery_js = 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js';
// 引数を処理
if (process.argv.length <= 2) {
  util.puts('Usage: node exam1.js [FILE]');
  process.exit(1);
}
// ファイルを読み込み
var content = fs.readFileSync(process.argv[2], 'utf8');
// Windowオブジェクトを生成
var document = jsdom.jsdom(content);
var window = document.createWindow();

jsdom.jQueryify(window, jquery_js, function(window, $) {
  // divを追加する
  $('body').append('<div>More Hello World!!</div>');
  // DOMツリーを出力する
  if (document.doctype) {
    util.puts(String(document.doctype));
  }
  util.print(domToHtml.domToHtml(document, true));
});



