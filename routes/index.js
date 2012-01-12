
/*
 * GET home page.
 */

/*
var request = require('request'),     // リクエストモジュール
  jsdom = require('jsdom'),           // DOM操作用
  Iconv = require('iconv').Iconv,     // 文字列変換
  Buffer = require('buffer').Buffer,  // 変換用バイナリ操作
  fs = require('fs'),                 // ファイル操作
  httpsubr = require('./httpsubr');

var jquery = fs.readFileSync('./jquery.min.js').toString();
*/
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

var util = require('util'),
    newsokuParser = require('../newsokuParser');

exports.index = function(req, res){
  newsokuParser.getEntries('http://blog.livedoor.jp/insidears/', function(err, entries) {
    if (err) {
      throw err;
    }
    res.render('index', { title: 'ニュー速VIP', bloglist: entries })
  });
}
/*
exports.index = function(req, res){
  var bloglist = [];
  var isComplete = false;

  jsdom.env({
    html: "http://blog.livedoor.jp/insidears/",
    src:  [jquery],
    done: function (errors, window) {
      var $ = window.$;
      var blogbody = $('.blogbody');
      var cnt = 1;
      blogbody.each(function() {
        //console.log($(this).html());
        console.log(bloglist.push($(this).html()));
        
        if(cnt++ == blogbody.length) {
          isComplete = true;
        }
      });
    }
  });
  while(!isComplete) {
  }
  console.log("配列数=" + bloglist.length);

  res.render('index', { title: 'ニュー速VIP', bloglist: bloglist })
};
*/
