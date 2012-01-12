// HTMLコンテンツからリンク（aタグ）を取り出す

var url = require('url'),
    embedJQuery = require('./embedJQuery'),
    ListPage = require('./listPage').ListPage,
    Summary = require('./listPage').Summary;

var targetUrl = 'http://blog.livedoor.jp/insidears/';

// jQueryでaタグを取り出しcallbackを起動
exports.getListPage = function(callback) {
    embedJQuery.jQueryRequest(targetUrl, function(err, window, $) {
        if (err) {
            if (callback) {
                callback(err);
            } else {
                throw err;
            }
            return;
        }

        // リストページ解析結果オブジェクトを生成
        var listPage = new ListPage();
        // 各記事概要を格納
        $('.blogbody').each(function() {
          // text取得
          var title = $(this).find('.title > a').text();
          var link = $(this).find('.title > a').attr('href');
          var body = $(this).find('.main').html();
          var summary = new Summary(title, body, link);
          //debug
          console.log(summary.toString());

          listPage.addSummary(summary);
        });
        // CSSを格納
        listPage.csses = ['http://blog.livedoor.jp/insidears/site.css?new'];

        if (callback) {
            callback(null, listPage);
        }
    });
}

