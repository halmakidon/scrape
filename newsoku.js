// scraper.js
var request = require('request'),     // リクエストモジュール
  jsdom = require('jsdom'),           // DOM操作用
  Iconv = require('iconv').Iconv,     // 文字列変換
  Buffer = require('buffer').Buffer;  // 変換用バイナリ操作

/*
exports.scrape = function(url, callback) {
  request(
    {uri:url},
    function (error, response, body) {
      jsdom.env(
        {
          html: body,
        scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js']
        }
    });
*/

jsdom.env("http://blog.livedoor.jp/insidears/", 
  ['https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'],
  function (errors, window) {
    var $ = window.$;
    var blogbody = $('.blogbody');
    
    blogbody.each(function() {
        console.log($(this).html());
    });
  }
);

